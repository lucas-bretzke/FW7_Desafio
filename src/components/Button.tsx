import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native'

type TypeProps = {
    text: string;
    color: string;
    bgColor: string;
    width: number;
    onClick: () => void;
}

export default function Button(props: TypeProps) {

    return (
        <TouchableOpacity onPress={props.onClick} style={[styles.button, { backgroundColor: props.bgColor, width: props.width }]}>
            <Text style={[styles.text, { color: props.color }]}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        paddingVertical: 8,
        alignItems: 'center',
        justifycontent: 'center',
        margin: 5
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
})