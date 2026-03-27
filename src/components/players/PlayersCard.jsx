import { Flag, UserRound } from "lucide-react";
import React from "react";

const PlayersCard = ({ playersData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-green-50 p-2 rounded-md">
      {playersData.map((player, index) => (
        <div key={index} className="card bg-base-100 shadow-lg hover:shadow-xl transition-all">
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
              <button className="btn">Choose player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayersCard;
