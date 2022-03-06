import Head from "next/head";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <h1>ここはホームページです</h1>
      </main>
    </div>
  );
};

export default Home;
