import './ItemCard.css';

// ItemCard component to display individual items
const ItemCard = ({ item, handleAction, actionText }) => {
  return (
    <div className="item-card">
      <h3>{item.trackName || item.collectionName}</h3>
      <p>{item.artistName}</p>
      <button onClick={() => handleAction(item)} className="item-action-button">{actionText}</button>
    </div>
  );
};

export default ItemCard;
