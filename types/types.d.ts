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

interface ColorPaletteModalProps {
  navigation: {
    navigate: (screen: string, params: { newColorPalette: { paletteName: string; colors: Colors[] } }) => void;
  };
}

interface ColorPaletteProps {
  navigation: ColorPaletteModalProps['navigation'];
  route: {
    params: {
        paletteName: string;
        colors: Colors[];
      };
    };
}

declare interface HomeProps {
  navigation: {
    navigate: (screen: string, params?: { newColorPalette?: ColorPalette }) => void;
  };
  route: {
    params?: {
      newColorPalette?: ColorPalette;
    };
  };
}

type RootStackParamList = {
  Main: undefined;
  ColorPaletteModal: undefined;
};

type MainStackParamList = {
  Home: undefined;
  ColorPalette: { paletteName: string; colors: { colorName: string; hexCode: string }[] };
};

type AppNavigationProp = {
  navigate: (screen: keyof RootStackParamList, params?: any) => void;
};

type MainScreenRouteProp = {
  route: { params?: { paletteName?: string } };
};
