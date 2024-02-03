import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>([]);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(URL);

    if (result.ok) {
      const palettes: ColorPalette[] = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <>
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', item);
            }}
            colorPalette={item}
          />
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
