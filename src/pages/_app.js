import '@/styles/globals.css'
import '@fontsource/nunito'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    body2: {
      lineHeight: '1.2'
    }
  }
})

export default function App ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
