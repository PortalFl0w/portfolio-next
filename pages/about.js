import Head from 'next/head'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import Navigation from '../components/nav'
import Artwork from '../components/artwork'

export default function Home() {
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel efficitur tellus. Fusce id ipsum ut nibh dapibus porttitor. In vitae facilisis leo, ut congue turpis. Ut viverra ante et libero maximus, vel posuere enim hendrerit. Nullam ornare at nunc at tempus. Fusce tempor gravida ligula et convallis. Fusce congue hendrerit ipsum ut feugiat.</p>
                <h3>Buttons</h3>
                <div className={styles.innerRow}>
                  <div className={styles.innerColumn}>
                    <Image className={styles.button} src="/GitHub-Mark-120px-plus.png" width="50" height="50" />
                  </div>
                  <div className={styles.innerColumn}>
                    <Image className={styles.button} src="/LI-In-Bug.png" width="60" height="50" />
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
