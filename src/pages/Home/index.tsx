import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';


import Button from '../../components/Button'

export default function Home() {
    const [url, setUrl] = useState('');
    const [newUrl, setNewUrl] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.urlFormContainer}>

                <View style={styles.containerLogo} >
                    <Feather name="link" size={26} color="blue" />
                    <Text style={styles.title}>Encurtador de URL</Text>
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Destino</Text>
                    <TextInput
                        value={url}
                        onChangeText={text => setUrl(text)}
                        placeholder='Coloque sua URL aqui'
                        style={styles.input}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.label}>Títilo (opcional)</Text>
                    <TextInput
                        value={url}
                        onChangeText={text => setNewUrl(text)}
                        style={styles.input}
                    />
                </View>

                <View style={styles.containerButtons}>
                    <Button onClick={() => alert('Clicou')} text="Encurtar" color="#fff" bgColor="#023696" width={145} />
                    <Button onClick={() => alert('Clicou')} text="Copiar" color="orange" bgColor="#023696" width={145} />
                </View>

            </View>

            <View style={styles.containsListOfLinks}>
                LIST
            </View>
        </View>
    );
}