import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

const Home: React.FC<{ navigation: any }> = ({ navigation }) => {
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
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
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
