import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, FlatList } from 'react-native';

const PalettePreview: React.FC<PalettePreviewProps> = ({ handlePress, colorPalette }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.text}>{colorPalette.paletteName}</Text>
            <FlatList
                horizontal={true}
                style={styles.list}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={(item) => item.colorName}
                renderItem={({ item }) => (
                    <View style={[styles.box, { backgroundColor: item.hexCode }]} />
                )}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    box: {
        height: 30,
        width: 30,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
    },
    list: {
        marginBottom: 20,
        flexDirection: 'row',
    },
});

export default PalettePreview;
