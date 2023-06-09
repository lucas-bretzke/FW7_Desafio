import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, ActivityIndicator, Keyboard } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import api from '../../service/api'
import { urlValidator } from '../../utils/helpers'

import Button from '../../components/Button'


export default function Home() {
    const [originalURL, setOriginalURL] = useState<string>('');
    const [urlCustom, setUrlCustom] = useState<string>('');
    const [endUrl, setEndUrl] = useState<string>('');
    const [msgError, setMsgError] = useState<string>('');
    const [loading, setLoading] = useState(false);



    function generateRandomString(length: number) {
        let newChart = '';
        const chart = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
            newChart += chart.charAt(Math.floor(Math.random() * chart.length));
        }
        return newChart;
    }

    async function checkFieldsBeforeRequest() {
        setLoading(true);
        Keyboard.dismiss();

        if (checkCustomUrl()) {
            setMsgError('O título opcional deve conter no mínimo 6 letras e não pode ter espaços.');
        } else if (endUrl) {
            setMsgError('Você precisa limpar os campos primeiro!\nClique na lixeira abaixo.');
        } else if (urlValidator(originalURL)) {
            setMsgError('');
            await generateShortURL();
        } else {
            setMsgError('Ops! URL inválida');
        }

        setLoading(false);
    }

    async function generateShortURL() {
        try {
            const code = urlCustom ? urlCustom : generateRandomString(6)
            await api.postShortUrl(originalURL, code);
            setEndUrl('api-fw7.onrender.com/' + code)
        } catch (error) {
            console.log('post error:', error);
            setMsgError('Ops! Erro interno, volte mais tarde')
        }
    }

    function copyUrl() {
        if (endUrl) {
            Clipboard.setString(endUrl), alert(`URL Copiada!\n ${endUrl}`)
        } else { setMsgError("URL inválida") }
    }

    function checkCustomUrl() {
        const hasSpace = urlCustom.includes(' ');
        const isValidLength = urlCustom.length >= 1 && urlCustom.length < 6

        return hasSpace || isValidLength
    }

    function clearContentButton() {
        setMsgError(''), setEndUrl(''), setUrlCustom(''), setOriginalURL('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo} >
                <Feather name="link" size={26} color="blue" />
                <Text style={styles.title}>Encurtador de URL</Text>
            </View>

            <View style={styles.urlFormContainer}>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Destino</Text>
                    <TextInput value={originalURL} onChangeText={text => setOriginalURL(text)} placeholder='Coloque sua URL aqui' style={styles.input} />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Título (opcional)</Text>
                    <TextInput value={urlCustom} onChangeText={text => setUrlCustom(text)} placeholder='ex: MinhaUrl' style={styles.input} />
                </View>
                {endUrl &&
                    <ScrollView style={{ maxHeight: 150 }}>
                        <View style={styles.description}>
                            <Text style={[{ color: 'white' }]}>{endUrl}</Text>
                            <Text style={{ color: 'white' }}>Redireciona para:</Text>
                            <Text style={{ color: 'white' }}>{originalURL}</Text>
                        </View>
                    </ScrollView>
                }

                {msgError && <Text style={styles.msgError}>{msgError}</Text>}

                <View style={styles.containerButtons}>
                    <Button onClick={() => checkFieldsBeforeRequest()} text="Encurtar" color="#fff" bgColor="#023696" width={145} />
                    <Button onClick={() => copyUrl()} text="Copiar" color="orange" bgColor="#023696" width={145} />
                </View>

                <View style={styles.clearContentButton}>
                    <Button onClick={() => clearContentButton()} text="🗑️" color="#fff" bgColor="#023696" width={40} />
                </View>
            </View>

            {loading && <ActivityIndicator size="large" color="blue" style={styles.spinner} />}
        </View >
    );
}