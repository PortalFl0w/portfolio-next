import Head from 'next/head'
import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
import Navigation from '../../components/nav-anchorless'
import Footer from '../../components/ui-elements/footer'
// import FullWidthButton from '../../components/ui-elements/full-width-button'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects - Geckota</title>
        <meta name="description" content="My personal website project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main lighter">
          <div className={styles.projectWrapper}>
          <div className={styles.projectCover}>
            <Image src="/geckota.png" layout={'fill'} objectFit="cover" />
          </div>
          <div class={styles.flexDivider}></div>
          <div className={styles.projectDescription}>
          <h1>Geckota</h1>
            <div className={styles.keyIdeas}>
              <p>
                I was involved in the design, infrastructure and maintenance of the core e-commerce experience for Geckota.com.
                The site went through a few iterations over the course of my work on it.
                Going from the initial design in wordpress, to solidifying itself as an e-commerce store based on Magento 2.
              </p>
              <h3>Active Years</h3>
              <p>2016-2020</p>
            </div>
            <div className={styles.techStack}>
              <h3>Tech Stack</h3>
              <p>LAMP, Magento 2</p>
            </div>
            <div className={styles.links}>
              <h3>Links</h3>
              <a href="https://www.geckota.com/" target="_blank">Geckota.com</a>
            </div>
          </div>

          </div>
          <Footer />
      </main>
    </div>
  )
}
