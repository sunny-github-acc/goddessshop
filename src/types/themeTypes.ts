export interface ThemeInterface {
  theme: string
  colors: {
    primary: string
    primary10: string
    primary20: string
    primary30: string
    secondary: string
    secondary10: string
    secondary20: string
    secondary30: string
    tertiary: string
    grey: string
    grey05: string
    grey10: string
    grey20: string
    grey30: string
    grey40: string
    white: string
    white10: string
    white20: string
    white30: string
    white40: string
    transparent: string
  }
  height: { s: string }
  borderRadius: string
  fonts: {
    weight: { bold: string; regular: string }
    size: {
      xxl: string
      xl: string
      l: string
      m: string
      s: string
      xs: string
    }
  }
}

export interface ThemeReducerInterface {
  theme: ThemeInterface
}
