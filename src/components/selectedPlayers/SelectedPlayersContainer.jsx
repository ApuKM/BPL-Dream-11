import React from "react";
import Card from "./Card";

const SelectedPlayersContainer = ({
  selectedPlayers,
  setSelectedPlayers,
  setCoin,
}) => {
  //   console.log(selectedPlayers);
  return (
    <>
      {selectedPlayers.length === 0 ? (
        <div className="flex items-center justify-center h-50 ">
          <div>
          <h3 className="text-2xl font-semibold text-center">No players selected yet.</h3>
          <p className="text-xl text-gray-800 text-center">Choose some players.</p>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default SelectedPlayersContainer;
