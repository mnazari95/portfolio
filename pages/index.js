import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContactForm from '../components/ContactForm.js';
import Navigation from '../components/Navigation.js';
import Header from '../components/Header.js';
import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import Footer from '../components/Footer';

export default function Home() {

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Mofiz.dev | Javascript Developer</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
          <meta name="description" content="A personal website for Mohammad Hafiz Nazari. Show casing what I'm up to in my Software development career." />
        </Head>

        <Header />
        <main className={styles.main}>
          <section className={styles.section} className={styles.a} id="projects">
            <h1 className={styles.title}>
              Projects
        </h1>
            <div className={styles.centerContent}>
              <div className={styles.grid}>
                <a href="https://canswap.net" target="_blank" rel="noopener noreferrer" className={styles.card}>
                  <h3>Canswap &rarr;</h3>
                  <p>A full stack project where I made use of MERN stack. Users are able to upload images of what they want to sell or trade, make an offer of item or money, message others trade their belongings</p>
                  <h4>Features:</h4>
                  <ul>
                    <li>Create/edit/delete posts</li>
                    <li>Search functionality</li>
                    <li>Data-mine craiglist postings</li>
                    <li>Message other users</li>
                    <li>Make offers with money or items</li>
                    <li>Accept/reject offers</li>
                  </ul>
                  <h4>Technologies:</h4>
                  <ul>
                    <li>ReactJS</li>
                    <li>ExpressJS</li>
                    <li>MySQL</li>
                    <li>NodeJS</li>
                    <li>Redis</li>
                    <li>PuppeteerJS</li>
                    <li>AWS S3</li>
                    <li>AWS Lambda</li>
                    <li>Nginx</li>
                    <li>Bootstrap</li>
                  </ul>
                </a>
                <a href="https://mnazari95.github.io/pubapiapp/" target="_blank" rel="noopener noreferrer" className={styles.card}>
                  <h3>NYT Article Searcher &rarr;</h3>
                  <p>ReactJS application in which integrates NYT public API by displaying most popular news.</p>
                  <h4>Features:</h4>
                  <ul>
                    <li>Trending News</li>
                    <li>Article Searches</li>
                    <li>Search Filtering</li>
                    <li>Saving Articles</li>
                    <li>Pagination</li>
                  </ul>
                </a>
              </div>
            </div>
          </section>
          {/* <section className={styles.section} className={styles.b} id="blogs">
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
          <section className={styles.section} className={styles.b} id="about">
            <h1 className={styles.title}>
              About
          </h1>
            <div className={styles.centerContent}>
              <p className={styles.paragraph}>I'm a software developer experienced with ReactJS for frontend and NodeJS + MySQL for backend.
              Prior to web development I've had worked with client side C#, and Java(android development). I enjoy learning new ways of implementing my ideas, whether
              its through new Technologies or tools. Currently I've been focusing more towards Javascript because of the immense amount of open source software that is available
              today. I'm comfortable working with variety of projects, anything from static website to full on dynamic web applications. The best way to reach me is either
              through the contact form below or linkedIn which can be accessed in the footer of this website.
          </p>
            </div>
          </section>
          <section className={styles.section} className={styles.a} id="contact">
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
