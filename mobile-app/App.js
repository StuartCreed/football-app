import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React from 'react';

export default function App() {
    const [number, onChangeNumber] = React.useState('');
    return (
        <>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="Enter your number"
                    keyboardType="numeric"
                />
                <StatusBar style="auto"/>
            </View>
            <View>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.scrollText}>My name is {number}.</Text>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: 'deepskyblue',
    },
    input: {
        height: 40,
    },
    scrollText: {
        fontSize: 20,
        color: 'white',
    },
});
