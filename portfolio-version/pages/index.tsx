import Head from 'next/head'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Equinox Crest Productions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <main>
        <div>
          <p>
            <h1>Equinox Crest Productions LLC</h1>

            <h2>William Crews</h2>
            
            {/* <!-- div1 --> */}
            <div id="div1">

                {/* <!-- Profile --> */}

                <p id="paper">
                    <h3>Profile</h3>

                    <div id="flowling"><strong>Musician</strong>- Always down to jam.</div>

                    <div id="flowling"><strong>Developer</strong>- Always down to code.</div>

                    <div id="flowling"><strong>Producer</strong>- Always down to program.</div>
                </p>

                {/* <!-- Projects --> */}

                <p id="paper">
                    <h3>Projects</h3>

                    <div>
                        <h4>Equinox Crest Productions LLC</h4>
                    </div>

                    <div>
                        <h4>Ptocojin Mystikoz</h4>
                    </div>

                </p>
            </div>
            


            


            {/* <!-- Work Experience --> */}
            <p id="paper">
                <h3>Work Experience</h3>

                <div>
                    <h4>Oransi</h4>
                </div>

                <div>
                    <h4>Dun and Bradstreet</h4>
                </div>

                <div>
                    <h4>Avazyme</h4>
                </div>
                
            </p>


            {/* <!-- Education --> */}
            <p id="paper">
                <h3>Education</h3>

                <div>
                    <h4>Belmont University</h4>
                </div>

                <div>
                    <h4>UNC Coding Bootcamp</h4>
                </div>

                <div>
                    <h4>LinkedIn Certificates</h4>
                </div>
                
            </p>
          </p>
        </div>
      </main>
    </>
  )
}




{/* <main className={styles.main}>
<div className={styles.description}></div></main> */}