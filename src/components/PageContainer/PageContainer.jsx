import styles from './PageContainer.module.css'
import { LooperBottom, LooperTop } from '../Looper/Looper'

const PageContainer = ({ children, display, alignItems, justifyContent }) => {
  return (
    <main className={styles.mainContainer} style={{ display: `${display}`, alignItems: `${alignItems}`, justifyContent: `${justifyContent}` }}>
      <LooperTop />
      <LooperBottom />
      {children}
    </main>
  )
}

export default PageContainer
