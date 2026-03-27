import React, { useState } from "react";
import { Flag, UserRound } from "lucide-react";

const Card = ({ player, index, setCoin, selectedPlayers, setSelectedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setCoin((prev) => {
      const newCoin = prev - player.price;
      if (newCoin < 0) {
        alert("You don't have enough coin");
        return prev;
      }
      return newCoin;
    });
    setSelectedPlayers([...selectedPlayers, player]);
    setIsSelected(true);
  };

  return (
    <div>
      <div
        key={index}
        className="card bg-base-100 shadow-lg hover:shadow-xl transition-all"
      >
        <figure className="h-56 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover object-center"
            src={player.image}
            alt={player.playerName}
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center gap-2">
            <UserRound />
            <h2 className="card-title">{player.playerName}</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flag />
              <p>{player.country}</p>
            </div>
            <button className="btn">{player.playerType}</button>
          </div>
          <div className="divider"></div>
          <h4 className="text-base font-bold">Rating: {player.rating}</h4>
          <div className="flex items-center justify-between">
            <p className="font-semibold">{player.battingStyle}</p>
            <button className="btn">{player.bowlingStyle}</button>
          </div>
          <div className="card-actions justify-between items-center">
            <p className="font-semibold">Price: ${player.price}</p>
            <button
              onClick={(e) => handleClick(e)}
              className="btn"
              disabled={isSelected}
            >
              {isSelected ? "Selected" : "Choose player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
