import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="personal Blog">
      <Component {...pageProps} />
    </Layout>
    );
}

export default MyApp
