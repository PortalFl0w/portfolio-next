import Head from 'next/head'
import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Navigation from '../../components/nav-anchorless'
import Footer from '../../components/ui-elements/footer'
import FullWidthButton from '../../components/ui-elements/full-width-button'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - This Site</title>
        <meta name="description" content="My personal website project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main lighter">
          <div className={styles.projectWrapper}>
          <div className={styles.projectCover}>
            <Image src="/before-2.png" layout={'fill'} objectFit="cover" />

          </div>
          <div className={styles.projectDescription}>
          <h1>About This Website</h1>
            <div className={styles.keyIdeas}>
              <p>
                Personal site serving as a portfolio of work, and hub for links to outside profiles etc.
                The site's main feature is a full-screen animated landscape artwork, that syncs itself to the user's local time as well as weather and more.
                The landscape piece was mainly used as good practice and playground for testing ideas.
              </p>
            </div>
            <div className={styles.techStack}>
              <h3>Tech Stack</h3>
              <p>Next.js (Framework - React/Node), Netlify (Hosting)</p>
            </div>
            <div className={styles.links}>
              <h3>Links</h3>
              <a href="https://github.com/PortalFl0w/portfolio-next" target="_blank">Source Code</a>
            </div>
          </div>

          </div>
          <Footer />
      </main>
    </div>
  )
}
