import Head from "next/head";
import Header from "@components/Header/Header";
import Feeds from "@components/Feeds/Feeds";
import Footer from "@components/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />
      {/* feed */}
      <Feeds />
      <Footer />
    </div>
  );
}
