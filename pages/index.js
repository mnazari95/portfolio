import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContactForm from '../components/ContactForm.js';
import Navigation from '../components/Navigation.js';
import Header from '../components/Header.js';
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Mofiz.dev | Software Developer</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
          <meta name="description" content="A personal website for Mohammad Hafiz Nazari. Show casing what I'm up to in my Software development career." />
        </Head>

        <Header />
        <main className={styles.main}>
          <section className={[styles.section, styles.a].join(" ")} id="projects">
            <h1 className={styles.title}>
              Projects
            </h1>
            <div className={styles.centerContent}>
              <div className={styles.grid}>
                <Card link={"https://apps.apple.com/app/quick-mental-math/id1642089974"}
                  title={"Quick Mental Math - IOS"}
                  description={"Built using swift with swiftUI. Integrated ads using swift package manager, CoreData"}
                  features={["Push Notification","Firebase remote notification","Swift", "SwiftUI", "CoreData", "IOS Native", "Ads"]} />
                  
                <Card link={"https://apps.apple.com/app/fuel-cost-manager-for-cars/id1631714485"}
                  title={"Bola Mileage Tracker - IOS"}
                  description={"First IOS app, built while learning swift. Integrated third party library charts through swift package manager, utilizes mapkit along side corelocation for background location tracking."}
                  features={["Swift", "SwiftUI","Core Location", "MapKit", "CoreData", "Charts", "IOS Native", "StoreKit", "Ads"]} />

                <Card link={"https://play.google.com/store/apps/details?id=com.itsdotstudios.gastracker"}
                  title={"Fuel Cost Manager - Android"}
                  description={"Utilizes modern android development technologies along with MVVM architecture, implementaed ads alongside in-app-purchases"}
                  features={["Kotlin", "Jetpack Compose", "Room", "MVVM", "Android Native", "In App Purchases", "Ads"]} />

                <Card link={"https://mnazari95.github.io/pubapiapp/"}
                  title={"NYT Article Searcher"}
                  description={"ReactJS application in which integrates NYT public API by displaying most popular news."}
                  features={["Trending News", "Article Searches", "Search Filtering", "Saving Articles", "Pagination"]} />

                <Card link={"https://www.youtube.com/watch?v=zDKQxhKNUjk"}
                  title={"Canswap"}
                  description={"A FullStack Web App where I used ReactJS for frontend and ExpressJS Along with MySQL for backend."}
                  features={["ReactJS", "ExpressJS", "MySQL", "NodeJS", "Redis", "PuppeteerJS", "AWS S3", "AWS Lambda", "Nginx", "Bootstrap"]} />

              </div>
            </div>
          </section>
          {/* <section className={[styles.section, styles.b].join(" ")} id="blogs">
          <h1 className={styles.title}>
            Blogs
          </h1>
          <div className={styles.centerContent}>
          <div className={styles.grid}>
            {posts.map((post) => (
              <Post key={post.link} post={post} />
            ))}
          </div>
          </div>
        </section> */}
          <section className={[styles.section, styles.b].join(" ")} id="about">
            <h1 className={styles.title}>
              About
            </h1>
            <div className={styles.centerContent}>
              <p className={styles.paragraph}>I'm a software developer currently located western Canada. I have worked with variety of technologies in the past such as
                ReactJS, NodeJS, MySQL, Kotlin, Java, Swift. I'm capable of working with frontend technologies or backend. I enjoy learning new ways of solving problems and implementing ideas
                through new Technologies or tools. Currently I've been focusing more towards Mobile development. I'm open for new opertunities and challenges in where I can contribute, learn, and improve.
                I'm comfortable working with variety of technologies, anything from a cms website to full on dynamic web/mobile applications. The best way to reach me is either
                through the contact form below or through linkedIn.
              </p>
            </div>
          </section>
          <section className={[styles.section, styles.a].join(" ")} id="contact">
            <h1 className={styles.title}>
              Contact Me
            </h1>
            <ContactForm />
          </section>
        </main>
        <Footer />
      </div>
      <Navigation />
    </>
  )
}
