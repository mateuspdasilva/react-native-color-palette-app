import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props: { colorName: string; colorHex: string }) => {
  const colorName = props.colorName;
  const colorHex = props.colorHex;

  const boxColor = {
    backgroundColor: colorHex,
  }

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.box}>{colorName}: {colorHex}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  boxText: {
    fontWeight: '600',
    color: 'white',
  },
});

export default ColorBox;
