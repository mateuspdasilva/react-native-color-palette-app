import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ColorBox from '../components/ColorBox';

type RootStackParamList = {
  ColorPalette: {
    colors: { colorName: string; hexCode: string }[];
    paletteName: string;
  };
};

type ColorPaletteNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ColorPalette'
>;

type ColorPaletteRouteProp = RouteProp<RootStackParamList, 'ColorPalette'>;

type ColorPaletteProps = {
  route: ColorPaletteRouteProp;
  navigation: ColorPaletteNavigationProp;
};

const ColorPalette: React.FC<ColorPaletteProps> = ({ route }) => {
  const { colors, paletteName } = route.params;

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} colorHex={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ColorPalette;
