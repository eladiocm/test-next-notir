import styles from './PageContainer.module.css'
import { LooperBottom, LooperTop } from '../Looper/Looper'

const PageContainer = ({ children }) => {
  return (
    <main className={styles.mainContainer}>
      <LooperTop />
      <LooperBottom />
      {children}
    </main>
  )
}

export default PageContainer
