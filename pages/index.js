import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Al Farooj</title>
        <meta
          name="description"
          content="this is food based web site. made with next js and tailwind css"
        />
        <link
          rel="icon"
          href="https://images.deliveryhero.io/image/talabat/restaurants/logo-eng_637055314080391004.jpg"
        />
      </Head>


      {/* header component */}
      <Header />
    </div>
  );
}
