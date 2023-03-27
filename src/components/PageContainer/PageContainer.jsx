import { LooperBottom, LooperTop } from '../Looper/Looper'
import { useRouter } from 'next/router'

const PageContainer = ({ children, display, alignItems, justifyContent }) => {
  const router = useRouter()
  const rutaActual = router.pathname

  return (
    <main className='mainContainer' style={{ display: `${display}`, alignItems: `${alignItems}`, justifyContent: `${justifyContent}` }}>
      {children}
      {rutaActual === '/login' && (
        <>
          <LooperTop />
          <LooperBottom />
        </>)}
    </main>
  )
}

export default PageContainer
