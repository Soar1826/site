import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Icon from '@hackclub/icons'

export default function Home() {
  return (
    <>
    <div className={styles.container} style={{
      position: 'relative',
      zIndex: '10'
    }}>
      <Head>
        <title>Hack OC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="background-charcoal color-white" style={{
          width: '100%',
          padding: '5rem 2rem',
        }}>
          <h1 className={styles.title}>
            Hack <span className="color-orange" style={{
              marginLeft: '-12px',
              position: 'relative'
            }}>
              OC
              <img src="/orange.svg" style={{
                position: 'absolute',
                bottom: '50%',
                left: '0px',
                transform: 'translate(10%, 44.5%)'
              }} className="noselect" />
            </span>
          </h1>

        <p className={styles.description}>
          <span className="color-orange">
            <b>
              <Icon glyph="pin" size={32} style={{
                transform: 'translate(2px, 6px)'
              }} />
              Orange County
            </b>
          </span>'s First Post-Pandemic Hackathon
        </p>
        </div>

        <div className={styles.content} style={{
          position: 'relative'
        }}>
          <div style={{
            position: 'relative',
            zIndex: '20'
          }}>
          <h1>What's Hack OC?</h1>
          <p>Hack OC is the first in-person high school hackathon after the pandemic in Orange County, California. We're inviting you and anyone else to participate in <span>10 hours</span> of <span>coding</span>, <span>building</span>, <span>learning</span>, and <span>sharing</span>.</p>
          <br />
          <h1>What's a "hackathon"?</h1>
          <p>Hackathons are in-person coding events where teenagers come together to learn new skills, create fun projects, and make memories, typically for a day or two. There's also food, snacks, and drinks to fuel your creativity.</p>
          </div>

      <img src="/orange.png" style={{
        position: 'fixed',
        bottom: '-20px',
        right: '-40px',
        width: '300px',
        zIndex: '15',
        filter: 'opacity(0.7)'
      }} />
        </div>

      </main>

      <footer className={styles.footer} style={{
        backgroundColor: 'white',
        position: 'relative',
        zIndex: '25'
      }}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  )
}
