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
        <title>Ronald Tomaz</title>
        <meta
          name="description"
          content="Conheça minhas outras redes e bora se conectar e bater um papo?"
        />

        <meta property="og:url" content="https://ronaldtomaz.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ronald Tomaz" />
        <meta
          property="og:description"
          content="Conheça minhas outras redes e bora se conectar e bater um papo?"
        />
        <meta
          property="og:image"
          content="https://github.com/ronaldprofile.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ronaldtomaz.vercel.app/"
        />
        <meta property="twitter:title" content="Ronald Tomaz" />
        <meta
          property="twitter:description"
          content="Conheça minhas outras redes e bora se conectar e bater um papo?"
        />
        <meta
          property="twitter:image"
          content="https://github.com/ronaldprofile.png"
        />

        <link
          rel="icon"
          type="image/png"
          href="https://github.com/ronaldprofile.png"
        />
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
      user: data,
    },
  };
};
