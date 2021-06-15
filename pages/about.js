import Head from 'next/head'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import Navigation from '../components/nav'
import Artwork from '../components/artwork'
import FullWidthButton from '../components/ui-elements/full-width-button'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Lipski - About</title>
        <meta name="description" content="About Me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Artwork />

      <Navigation />

      <main className={styles.contentRow}>
        <div className={styles.contentColumn}>
            <div className={styles.contentBox}>
                <h1>Hi,</h1>
                <p>Developing with the future in mind. 4+ years of experience in much tech</p>
                <div className={styles.innerRow}>
                  <div className={styles.innerColumn}>
                    <FullWidthButton icon={["fab", "github"]} link="https://github.com/PortalFl0w" text="GitHub" />
                  </div>
                  <div className={styles.innerColumn}>
                    <FullWidthButton icon={["fab", "linkedin"]} link="https://www.linkedin.com/in/matt-l5543/" text="LinkedIn" />
                  </div>
                </div>
            </div>
        </div>
        {/* <div className={styles.contentColumn}>
            <div className={styles.contentBox}>
            Hello this is me.
            </div>
        </div> */}
      </main>
    </div>
  )
}
