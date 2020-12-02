import Link from 'next/link';

export const RecentBlog = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
      <li>
        <Link href={'/blog' + link}>
          <h5><a>{meta.title+" →"}</a></h5>
        </Link>
      </li>
  )
}