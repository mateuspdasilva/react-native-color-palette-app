import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props: Colors) => {
  const colorName = props.colorName;
  const hexCode = props.hexCode;

  const boxColor = {
    backgroundColor: hexCode,
  }

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.box}>{colorName}: {hexCode}</Text>
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
