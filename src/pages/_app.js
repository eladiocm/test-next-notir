import { ThemeConfig } from '@/config/theme.config'
import { NotificationProvider } from '@/context/notification.context'
import '@/styles/globals.css'
import '@fontsource/nunito'

export default function App ({ Component, pageProps }) {
  return (
    <ThemeConfig>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </ThemeConfig>
  )
}
