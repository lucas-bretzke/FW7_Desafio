import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable'


type WelcomeTypes = {
    navigation: any
}

export default function Welcome({ navigation }: WelcomeTypes) {

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View animation="flipInY" style={styles.containerLogo} >
                <Feather name="link" size={26} color="blue" />
                <Text style={styles.title}>Encurtador de URL</Text>
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.desc1}>Transforme URLs longas em curtas com facilidade!</Text>
                <Text style={styles.desc2}>Organize seus links com a Bretz.</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </SafeAreaView>
    );
}