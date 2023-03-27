import { ThemeConfig } from '@/config/theme.config'
import '@/styles/globals.css'
import '@fontsource/nunito'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeConfig>
      <Component {...pageProps} />
    </ThemeConfig>
  )
}
