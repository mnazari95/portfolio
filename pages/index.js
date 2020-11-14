import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContactForm from '../components/ContactForm.js';
import Navigation from '../components/Navigation.js';
import Header from '../components/Header.js';
import { useRef, useState } from 'react';

export default function Home() {

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Mofiz.dev | Javascript Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <section className={styles.section} className={styles.a} id="projects">
        <h1 className={styles.title}>
          Projects
        </h1>
        <div className={styles.centerContent}>
        <div className={styles.grid}>
          <a href="https://mnazari95.github.io/pubapiapp/"  target="_blank" rel="noopener noreferrer" className={styles.card}>
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

          <a href="https://canswap.net" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h3>Canswap &rarr;</h3>
            <p>A Web App where users can trade their belongings</p>
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
        </div>
        </div>
        </section>
        <section className={styles.section} className={styles.b} id="blogs">
          <h1 className={styles.title}>
            Blogs
          </h1>
          <div className={styles.centerContent}>
          <div className={styles.grid}>
            <a href="/#" className={styles.card}>
              <h1>Coming Soon..</h1>
            </a>
          </div>
          </div>
        </section>
        <section className={styles.section} className={styles.a} id="about">
          <h1 className={styles.title}>
            About
          </h1>
          <div className={styles.centerContent}>
          <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Mi tempus imperdiet nulla malesuada pellentesque elit. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. Leo a diam sollicitudin tempor id eu nisl. Erat pellentesque adipiscing commodo elit. Ac turpis egestas integer eget aliquet nibh praesent tristique. Tortor vitae purus faucibus ornare suspendisse sed nisi. Consectetur lorem donec massa sapien. Netus et malesuada fames ac turpis egestas maecenas pharetra. Urna duis convallis convallis tellus id interdum velit laoreet. Leo in vitae turpis massa sed elementum tempus egestas. In vitae turpis massa sed elementum tempus. Feugiat pretium nibh ipsum consequat nisl vel pretium. Eu feugiat pretium nibh ipsum consequat nisl. Bibendum at varius vel pharetra vel turpis nunc eget.</p>
          </div>
        </section>
        <section className={styles.section} className={styles.b} id="contact">
          <h1 className={styles.title}>
            Contact Me
          </h1>
          <ContactForm />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/mnazari95"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github &rarr;
        </a>
      </footer>
    </div>
    <Navigation />
    {/* <script src="path/to/particles.min.js"></script> */}
    </>
  )
}
