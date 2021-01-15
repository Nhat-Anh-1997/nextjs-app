import Head from "next/head";
import Link from "next/link";
import { getSortedPostData } from "../lib/posts";
import styles from "../styles/Home.module.css";

export default function Home({ allPostData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        main page
        {allPostData.map(({ title, id }) => (
          <div key={id}>
            {title}
            <br />
            <Link href={`/posts/${id}`}>{id}</Link>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allPostData = getSortedPostData();
  return {
    props: { allPostData },
  };
}
