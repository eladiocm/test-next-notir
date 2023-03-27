import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import '@fontsource/nunito'

const theme = createTheme({
  palette: {
    primary: {
      main: '#12518C'
    }
  },
  background: {
    primary: 'linear-gradient(130deg, rgba(255, 255, 255, 1) 50%, rgba(216, 246, 255, 1) 85%, rgba(158, 209, 255, 1) 100%)'
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    body2: {
      lineHeight: '1.2'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '4px',
          color: '#FFFFFF'

        }
      }
    }

  }

})

export const ThemeConfig = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
