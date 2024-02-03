import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home: React.FC<HomeProps> = ({ navigation, route }) => {
  const newColorPalette = route.params ? route.params.newColorPalette : undefined;
  const [colorPalettes, setColorPalettes] = useState<ColorPalette[]>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

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

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000)
  }, []);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes(palettes => [newColorPalette, ...colorPalettes])
    }
  }, [newColorPalette]);

  return (
    <FlatList
      style={styles.list}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <>
          <PalettePreview
            handlePress={() => {
              navigation.navigate('ColorPalette', { newColorPalette: item });
            }}
            colorPalette={item}
          />
        </>
      )}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ColorPaletteModal');
          }}
        >
          <Text style={styles.text}>+ Add new color palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    color: 'teal',
  },
});

export default Home;
