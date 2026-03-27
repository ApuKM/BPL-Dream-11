import React from "react";
import Card from "./Card";

const SelectedPlayersContainer = ({ selectedPlayers, setSelectedPlayers, setCoin }) => {
  //   console.log(selectedPlayers);
  return (
    <>
      <div className="space-y-4 bg-green-50 p-2 rounded-xl">
        {selectedPlayers.map((selectedPlayer, index) => (
          <Card
            selectedPlayer={selectedPlayer}
            key={index}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
            setCoin={setCoin}
          />
        ))}
      </div>
    </>
  );
};

export default SelectedPlayersContainer;
