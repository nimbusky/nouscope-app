import Head from "next/head";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index Page</title>
      </Head>
      <main>
        <h1>ここはトップページです</h1>
      </main>
    </div>
  );
};

export default Home;
