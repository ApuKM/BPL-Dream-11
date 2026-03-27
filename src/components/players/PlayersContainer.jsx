import React, { use, useState } from "react";
import PlayersCard from "./PlayersCard";
import SelectedPlayersContainer from "../selectedPlayers/SelectedPlayersContainer";

const PlayersContainer = ({ playersPromise, coin, setCoin }) => {
  const [selectedType, setSelectedType] = useState("available");
  const playersData = use(playersPromise);
  //   console.log(playersData);
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        {selectedType === "available" ? (
          <h2 className="text-3xl mb-4">Available Players</h2>
        ) : (
          <h2 className="text-3xl mb-4">Selected Players</h2>
        )}

        <div className="flex items-center gap-0">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn border-l-success rounded-r-none rounded-l-xl ${selectedType === "available" ? "bg-yellow-400" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn border-r-success rounded-l-none rounded-r-xl ${selectedType === "selected" ? "bg-yellow-400" : ""}`}
          >
            Selected (2 of 6)
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <PlayersCard playersData={playersData} coin={coin} setCoin={setCoin} />
      ) : (
        <SelectedPlayersContainer />
      )}
    </div>
  );
};

export default PlayersContainer;
