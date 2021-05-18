import Head from "next/head";
import Dishes from "../components/Dishes";
import Header from "../components/Header";
import Nav from "../components/Nav";
import dummyDishes from '../utils/dummyData'

export default function Home({ dummyDishes }) {
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

      {/* nav component */}
      <Nav />

      {/* dishes component  */}
      <Dishes dummyDishes={dummyDishes} />
    </div>
  );
}

export const getStaticProps = async () => {
 
  return {
    props: {
      dummyDishes,
    },
  };
}