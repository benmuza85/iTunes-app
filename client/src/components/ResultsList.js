import ItemCard from './ItemCard';
import './ResultsList.css';

// ResultsList component to display search results
const ResultsList = ({ results, addFavourite }) => {
  return (
    <div className="results-list">
      {results.map(item => (
        <ItemCard key={item.trackId} item={item} handleAction={addFavourite} actionText="Add to Favourites" />
      ))}
    </div>
  );
};

export default ResultsList;
