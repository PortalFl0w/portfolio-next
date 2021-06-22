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
        <title>Projects - Odoo</title>
        <meta name="description" content="My personal website project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className="main lighter">
          <div className={styles.projectWrapper}>
          <div className={styles.projectCover}>
            <Image src="/odoo.png" layout={'fill'} objectFit="cover" />

          </div>
          <div className={styles.projectDescription}>
          <h1>Odoo ERP</h1>
            <div className={styles.keyIdeas}>
              <p>
                I was involved in multiple Odoo ERP based projects while at Glodo. 
                All solving different issues and helping businesses run smoother.
                Focused on customising the core system to bespoke requirements.
              </p>
              <h3>Active Years</h3>
              <p>2020-2021</p>
            </div>
            <div className={styles.techStack}>
              <h3>Tech Stack</h3>
              <p>Python, Postgres, JS, XML, Kubernetes</p>
            </div>
            <div className={styles.links}>
              <h3>Links</h3>
              <a href="https://www.odoo.com/" target="_blank">Odoo.com</a>
              <a href="https://www.glodo.uk/" target="_blank">Glodo.uk</a>
            </div>
          </div>

          </div>
          <Footer />
      </main>
    </div>
  )
}
