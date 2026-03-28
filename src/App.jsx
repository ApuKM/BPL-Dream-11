import { ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import PlayersContainer from "./components/players/PlayersContainer";
import { Suspense, useState } from "react";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [coin, setCoin] = useState(50000);
  const [playersPromise] = useState(() => fetchPlayers());
  return (
    <>
      <Navbar coin={coin} />
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
          <PlayersContainer
            playersPromise={playersPromise}
            coin={coin}
            setCoin={setCoin}
          />
        </Suspense>
      </section>
      <ToastContainer />
    </>
  );
}

export default App;
