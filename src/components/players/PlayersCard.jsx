import Card from "./Card";

const PlayersCard = ({ playersData, coin, setCoin }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-green-50 p-2 rounded-md">
      {playersData.map((player, index) => (
        <Card player={player} index={index} coin={coin} setCoin={setCoin} />
      ))}
    </div>
  );
};

export default PlayersCard;
