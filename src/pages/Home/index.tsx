import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import Clipboard from '@react-native-clipboard/clipboard';
import api from '../../service/api'
import Button from '../../components/Button'


export default function Home() {
    const [originalURL, setOriginalURL] = useState<string>('');
    const [urlCustom, setUrlCustom] = useState<string>('');
    const [endUrl, setEndUrl] = useState<string>('');
    const [msgError, setMsgError] = useState<string>('');
    const [msgSuccess, setMsgSuccess] = useState<string>('');


    function generateRandomString(length: number) {
        let newChart = '';
        const chart = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
            newChart += chart.charAt(Math.floor(Math.random() * chart.length));
        }
        return newChart;
    }

    async function generateShortURL() {
        if (originalURL) {
            setMsgError("")
            // try {
            const code = urlCustom ? urlCustom : generateRandomString(6)
            // await api.postShortUrl(originalURL, code);
            setEndUrl('http://localhost:3001/' + code)
            console.log(endUrl)
            setMsgSuccess('Success')
            // } catch (error) {
            // console.log('post error:', error);
            // }
        } else {
            setMsgError("Ops! você não inseriu nenhuma URL")
        }
    }


    function copyUrl() {
        endUrl ? (Clipboard.setString(endUrl), alert(`URL Copiada!\n ${endUrl}`))
            : setMsgError("URL inválida")
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
                    <TextInput value={urlCustom} onChangeText={text => setUrlCustom(text)} style={styles.input} />
                    {endUrl && <Text style={[{ color: 'white' }]}>{endUrl}</Text>}
                    {msgError && <Text style={[{ color: 'red' }]}>{msgError}</Text>}
                    {msgSuccess &&
                        <View>
                            <Text style={{ color: 'white' }}>redireciona para:</Text>
                            <Text style={{ color: 'white' }}>{originalURL}</Text>
                        </View>
                    }
                </View>

                <View style={styles.containerButtons}>
                    <Button onClick={() => generateShortURL()} text="Encurtar" color="#fff" bgColor="#023696" width={145} />
                    <Button onClick={() => copyUrl()} text="Copiar" color="orange" bgColor="#023696" width={145} />
                </View>

            </View>
        </View>
    );
}