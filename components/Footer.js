import stylesHome from '../styles/Home.module.css';

export default function Footer() {

  return(
    <>
      <footer className={stylesHome.footer}>
        <a
          href="https://github.com/mnazari95"
          target="_blank"
          rel="noopener noreferrer"
        >
        Github
        </a>
        <a
          href="https://ca.linkedin.com/in/hafiz-nazari-1b324a10a"
          target="_blank"
          rel="noopener noreferrer"
        >
        LinkedIn
        </a>
      </footer>
    </>
  );
}