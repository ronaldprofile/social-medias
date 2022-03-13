import Head from "next/head";
import { Navigation } from "../components/Navigation";
import { Profile } from "../components/Profile";

function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Head>
        <title>ronaldtomaz.dev</title>
      </Head>

      <div className="w-full mx-11 flex flex-col md:mx-auto md:w-80">
        <Profile />

        <Navigation />

        <footer className="text-center font-normal md:text-xl">
          <p className="text-white">Developer Frontend React JS.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
