import HeadSection from '../components/HeadSection'
import Nav from '../components/Nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadSection />
      <Nav />
    </div>
  )
}
