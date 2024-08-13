import ItemCard from './ItemCard';
import './FavouriteList.css';

// FavouriteList component to display favourite items
const FavouriteList = ({ favourites, removeFavourite }) => {
  return (
    <div className="favourite-list">
      {favourites.map(item => (
        <ItemCard key={item.trackId} item={item} handleAction={removeFavourite} actionText="Remove" />
      ))}
    </div>
  );
};

export default FavouriteList;
