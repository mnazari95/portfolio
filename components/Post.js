import Link from 'next/link'
import { HeadPost } from './HeadPost'
import styles from '../styles/Home.module.css';

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  return (
      <article className={styles.card}>
        <HeadPost meta={meta} />
        <Link href={'/blog' + link}>
          <a>Read more →</a>
        </Link>
      </article>
  )
}