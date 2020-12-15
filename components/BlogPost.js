import { HeadPost } from './HeadPost'
import bLayout from '../styles/BlogLayout.module.css';
import { posts } from "../getAllPosts";
import { RecentBlog } from '../components/RecentBlog';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { useEffect } from "react";
import Footer from '../components/Footer';

export default function BlogPost({ children, meta}) {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <header className={bLayout.blogHeader}>
        <h1>Mofiz.dev Blogs</h1>
      </header>
      <div className={bLayout.blogLayout}>
        <article className={bLayout.content}>
          <HeadPost meta={meta} isBlogPost />
          {children}
        </article>
        <aside>
          <ul>
            {posts.map((post) => (
              <RecentBlog key={post.link} meta={meta} post={post} />
            ))}
          </ul>
        </aside>
      </div>
      <Footer />
    </>
  )
}