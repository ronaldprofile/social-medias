import { Navigation } from "../components/Navigation";

function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full mx-11 flex flex-col md:mx-auto md:w-80">
        <div className="flex flex-col items-center">
          <div className="px-1 py-1 border-4 border-cyan-400 rounded-full">
            <img
              src="https://github.com/ronaldprofile.png"
              alt="Ronald Tomaz"
              className="
              w-24
              h-24
              cursor-pointer
              rounded-full

              md:w-52
              md:h-52
              "
            />
          </div>

          <strong className="text-2xl mt-4 font-sans text-white">
            Ronald Tomaz
          </strong>
        </div>

        <Navigation />

        <footer className="text-center font-normal md:text-xl">
          <p className="text-white">Developer Frontend React JS.</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
