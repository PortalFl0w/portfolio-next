import Head from 'next/head'
import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import Navigation from '../components/nav'
import Artwork from '../components/artwork'
import FullWidthButton from '../components/ui-elements/full-width-button'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Lipski - Projects</title>
        <meta name="description" content="My Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Artwork />

      <Navigation />

      <main>
        
      </main>
    </div>
  )
}
