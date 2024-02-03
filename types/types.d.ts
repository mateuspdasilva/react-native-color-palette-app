declare interface Colors {
  colorName: string;
  hexCode: string;
}

declare interface ColorPalette {
  paletteName: string;
  colors: Colors[];
}

declare interface PalettePreviewProps {
  handlePress: () => void;
  colorPalette: ColorPalette;
}