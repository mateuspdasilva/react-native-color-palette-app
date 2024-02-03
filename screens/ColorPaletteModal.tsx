import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, Switch, FlatList } from 'react-native';
import COLORS from '../constants/Colors';

const ColorPaletteModal: React.FC<ColorPaletteModalProps> = ({ navigation }) => {
    const [paletteName, setPaletteName] = useState<string>('');
    const [selectedColors, setSelectedColors] = useState<Colors[]>([]);

    const handleSubmit = useCallback(() => {
        if (!paletteName) {
            Alert.alert('Please enter a palette name');
        } else if (selectedColors.length < 5) {
            Alert.alert('Please add at least 5 colors to the palette');
        } else {
            const newColorPalette: ColorPalette = {
                paletteName: paletteName,
                colors: selectedColors,
            };
            navigation.navigate('Home', { newColorPalette });
        }
    }, [paletteName, selectedColors, navigation]);

    const handleValueChange = useCallback((value: boolean, color: Colors) => {
        if (value === true) {
            setSelectedColors(
                colors => [...colors, color]
            );
        } else {
            setSelectedColors(colors =>
                colors.filter(
                    selectedColor => color.colorName !== selectedColor.colorName
                ));
        }
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Palette name'
                style={styles.input}
                value={paletteName}
                onChangeText={setPaletteName}
            />
            <FlatList
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <View style={styles.color}>
                        <Text style={styles.name}>{item.colorName}</Text>
                        <Switch
                            value={
                                !!selectedColors.find(
                                    color => color.colorName === item.colorName
                                )}
                            onValueChange={selected => {
                                handleValueChange(selected, item)
                            }} />
                    </View>
                )}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    container: {
        padding: 5,
        backgroundColor: 'white',
        flex: 1,
    },
    button: {
        backgroundColor: 'teal',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    name: {
        marginBottom: 10,
    },
    color: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
});

export default ColorPaletteModal;
