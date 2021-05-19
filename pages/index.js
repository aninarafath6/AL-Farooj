import axios from "axios";
import Head from "next/head";
import Dishes from "../components/Dishes";
import Header from "../components/Header";
import Nav from "../components/Nav";
import requests from "../utils/requests";

export default function Home({ dishes }) {
  console.log(dishes);
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
      <Dishes dishes={dishes} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;

  const dishes = await axios.get(
    requests[genre]?.url || requests.fetchFastFood.url
  );
  console.log(dishes);
  return {
    props: {
      dishes: dishes.data.meals,
    },
  };
};
