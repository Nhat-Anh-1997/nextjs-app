import { getAllPostIds, getAllPostData } from '../../lib/posts';

export default function Post({ allPostData }) {
  return <div>{allPostData.title}
  <br/>
  <a href='/'>BACK</a>
  </div>;
}

export async function getStaticProps({ params }) {
  const allPostData = getAllPostData(params.id);
  return {
    props: { allPostData },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
