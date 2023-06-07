import React, { useState } from 'react';
import { Text, View, TextInput, Alert } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { Linking } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import Button from '../../components/Button'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function Home() {
    const route = useRoute();
    const [originalURL, setOriginalURL] = useState<any>('https://pt.stackoverflow.com/questions/474373/pegar-a-url-e-alterar-valor');
    const [urlCustom, setUrlCustom] = useState('');
    const [endUrl, setEndUrl] = useState('');


    async function generateShortURL() {
        try {
            await axios.post('http://localhost:3000/new', originalURL)
        } catch (error) {
            console.log('post error')
        }
    }

    function copyUrl() {
        if (endUrl) {
            const urlToCopy = `http://${endUrl}`;
            Clipboard.setString(urlToCopy);
            alert(`URL Copiada!\n ${urlToCopy}`);
        } else { alert("Url inválida") }
    }

    return (
        <View style={styles.container}>
            <View style={styles.urlFormContainer}>
                <View style={styles.containerLogo} >
                    <Feather name="link" size={26} color="blue" />
                    <Text style={styles.title}>Encurtador de URL</Text>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Destino</Text>
                    <TextInput value={originalURL} onChangeText={text => setOriginalURL(text)} placeholder='Coloque sua URL aqui' style={styles.input} />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Títilo (opcional)</Text>
                    <TextInput value={urlCustom} onChangeText={text => setUrlCustom(text)} style={styles.input} />
                </View>

                <View style={styles.containerButtons}>
                    <Button onClick={() => generateShortURL()} text="Encurtar" color="#fff" bgColor="#023696" width={145} />
                    <Button onClick={() => copyUrl()} text="Copiar" color="orange" bgColor="#023696" width={145} />
                </View>

            </View>

            <View style={styles.containsListOfLinks}>
                {endUrl && <Text>URL encurtada: {endUrl}</Text>}
            </View>
        </View>
    );
}