import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import Clipboard from '@react-native-clipboard/clipboard';
import api from '../../service/api'
import { urlValidator } from '../../utils/helpers'

import Button from '../../components/Button'


export default function Home() {
    const [originalURL, setOriginalURL] = useState<string>('');
    const [urlCustom, setUrlCustom] = useState<string>('');
    const [endUrl, setEndUrl] = useState<string>('');
    const [msgError, setMsgError] = useState<string>('');


    function generateRandomString(length: number) {
        let newChart = '';
        const chart = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
            newChart += chart.charAt(Math.floor(Math.random() * chart.length));
        }
        return newChart;
    }

    async function generateShortURL() {
        if (urlValidator(originalURL)) {
            setMsgError("")
            try {
                const code = urlCustom ? urlCustom : generateRandomString(6)
                await api.postShortUrl(originalURL, code);
                setEndUrl('https://api-fw7.onrender.com/' + code)
            } catch (error) {
                console.log('post error:', error);
                setMsgError('Ops! Erro interno, volte mais tarde')
            }
        } else {
            setMsgError("Ops! URL inválida")
        }
    }


    function copyUrl() {
        if (endUrl) {
            Clipboard.setString(endUrl), alert(`URL Copiada!\n ${endUrl}`)
        } else {
            setMsgError("URL inválida")
        }
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
                    <Text style={styles.label}>Títilo (opcional)</Text>
                    <TextInput value={urlCustom} onChangeText={text => setUrlCustom(text)} placeholder='ex: MinhaUrl' style={styles.input} />
                </View>

                {endUrl &&
                    <View style={styles.description}>
                        <Text style={[{ color: 'white' }]}>{endUrl}</Text>
                        <Text style={{ color: 'white' }}>Redireciona para:</Text>
                        <Text style={{ color: 'white' }}>{originalURL}</Text>
                    </View>
                }
                {msgError && <Text style={[{ color: 'red' }]}>{msgError}</Text>}

                <View style={styles.containerButtons}>
                    <Button onClick={() => generateShortURL()} text="Encurtar" color="#fff" bgColor="#023696" width={145} />
                    <Button onClick={() => copyUrl()} text="Copiar" color="orange" bgColor="#023696" width={145} />
                </View>

                <View style={styles.clearContentButton}>
                    <Button onClick={() => clearContentButton()} text="🗑️" color="#fff" bgColor="#023696" width={40} />
                </View>
            </View>
        </View>
    );
}