import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { selectTheme } from '../state/theme/ThemeReducer'

const CustomThemeProvider = ({ children }) => {
  const theme = useSelector(selectTheme)

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomThemeProvider
