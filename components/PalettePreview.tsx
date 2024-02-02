import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text>{colorPalette.paletteName}</Text>
        </TouchableOpacity>
    );
};

export default PalettePreview;
