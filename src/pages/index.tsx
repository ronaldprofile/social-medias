import Head from "next/head";
import { GetServerSideProps } from "next";

import { Navigation } from "../components/Navigation";
import { Profile } from "../components/Profile";

interface HomeProps {
  user: {
    name: string;
    avatar_url: string;
    bio: string;
  };
}

function Home({ user }: HomeProps) {
  return (
    <>
      <Head>
        <title>ronaldtomaz.dev</title>
      </Head>

      <div className="h-screen flex justify-center items-center">
        <div className="w-full mx-11 flex flex-col md:mx-auto md:w-80">
          <Profile name={user.name} avatar_url={user.avatar_url} />

          <Navigation />

          <footer className="text-center">
            <p className="text-white font-normal">{user.bio}</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://api.github.com/users/ronaldprofile");
  const data = await response.json();

  return {
    props: {
      user: data
    }
  };
};
