import Card from "./Card";

const PlayersCard = ({ playersData, coin, setCoin, setSelectedPlayers, selectedPlayers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-green-50 p-2 rounded-md">
      {playersData.map((player, index) => (
        <Card
          key={player.id ?? index}
          player={player}
          index={index}
          coin={coin}
          setCoin={setCoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ))}
    </div>
  );
};

export default PlayersCard;
