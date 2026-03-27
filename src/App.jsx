import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PlayersContainer from "./components/players/PlayersContainer";
import { Suspense } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <Navbar />
      <section
        id="homepage"
        className="w-11/12 md:w-[80%] mx-auto mt-10 md:mt-16"
      >
        <Banner />
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-40">
              <span className="loading loading-dots loading-xl"></span>
            </div>
          }
        >
          <PlayersContainer playersPromise={playersPromise} />
        </Suspense>
      </section>
    </>
  );
}

export default App;
