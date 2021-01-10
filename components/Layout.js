import Head from "next/head";
import bLayout from '../styles/BlogLayout.module.css';

export default function Layout({ children, pageTitle, description }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <main>
        <div className={bLayout.contentLayout}>{children}</div>
      </main>
    </>
  );
}