import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import '@fontsource/nunito'

const theme = createTheme({
  palette: {
    primary: {
      main: '#12518C'
    },
    secondary: {
      main: '#E6E6E6'
    },
    info: {
      main: '#096DCA'
    }
  },
  typography: {
    fontFamily: 'Nunito, sans-serif',
    subtitle1: {
      lineHeight: '1.2',
      fontSize: '16px',
      color: '#636363',
      fontWeight: '500'
    },
    body1: {
      lineHeight: '1.5',
      fontSize: '14px',
      color: '#333',
      fontWeight: '700'
    },
    body2: {
      lineHeight: '1.5',
      fontSize: '14px',
      color: '#1A1A1A',
      fontWeight: '700'
    },
    h1: {
      lineHeight: '1.2',
      fontSize: '48px',
      color: '#12518C',
      fontWeight: '700',
      textAlign: 'center',
      display: 'inline-block'
    },
    h2: {
      lineHeight: '1.2',
      fontSize: '36px',
      color: '#12518C',
      fontWeight: '400',
      textAlign: 'center',
      display: 'inline-block'
    },
    h3: {
      lineHeight: '1.2',
      fontSize: '20px',
      color: '#12518C',
      fontWeight: '700'
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: '4px'
        }
      }
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: '0.8em',
          fontSize: '1em'
        }
      },
      styleOverrides: {
        standardError: {
          border: '1px solid #f44336',
          background: 'rgba(244,67,54,0.1)'
        },
        standardSuccess: {
          border: '1px solid #66bb6a',
          background: 'rgba(102,187,106,0.1)'
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
