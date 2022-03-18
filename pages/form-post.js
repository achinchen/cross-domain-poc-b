import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { REDIRECT_POINT } from '../constants'

export default function Repeater() {
  const [isLoading] = useState(false)

  return (
    <div className={styles.container}>
      <Head>
        <title>Cross Domain POC - Site B</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Cross Domain Cookie - Site B</h1>
        <form action={REDIRECT_POINT} method="POST">
          <ul>
            <li>
              <button type="submit" className={styles.button} disabled={isLoading}>go to siteA</button>
            </li>
            <li>
              hint: {isLoading ? 'fetching' : 'please click button' }
            </li>
          </ul>
        </form>
      </main>
    </div>
  )
}
