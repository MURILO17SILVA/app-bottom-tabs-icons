import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhotoGrid from './components/PhotoGrid';

export default function GalleryScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Galeria de Fotos</Text>
            <PhotoGrid />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
