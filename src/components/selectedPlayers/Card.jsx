import React from "react";
import { Trash } from "lucide-react";

const Card = ({
  selectedPlayer,
  setSelectedPlayers,
  selectedPlayers,
  setCoin,
}) => {
  const handleFilteredPlayer = (selectedPlayer) => {
    // console.log(selectedPlayer)
    const filteredPlayers = selectedPlayers.filter(
      (player) => selectedPlayer.playerName !== player.playerName,
    );
    setCoin((prev) => prev + selectedPlayer.price);
    setSelectedPlayers(filteredPlayers);
  };
  return (
    <div className="flex items-center justify-between border border-green-100 rounded-lg p-4 shadow-lg">
      <div className="flex gap-4 items-center">
        <img
          src={selectedPlayer.image}
          alt=""
          className="w-20 object-contain object-center rounded-md"
        />
        <div>
          <h3 className="text-lg font-semibold">{selectedPlayer.playerName}</h3>
          <p className="text-base text-gray-600">{selectedPlayer.playerType}</p>
        </div>
      </div>
      <button
        className="btn text-red-500"
        onClick={() => handleFilteredPlayer(selectedPlayer)}
      >
        <Trash />
      </button>
    </div>
  );
};

export default Card;
