import { useState } from 'react';
import SearchForm from './components/SearchForm';
import ResultsList from './components/ResultsList';
import FavouriteList from './components/FavouriteList';
import LoadingIndicator from './components/LoadingIndicator';
import './styles/App.css';

const App = () => {
  // State to store search results
  const [results, setResults] = useState([]);
  // State to store favourite items
  const [favourites, setFavourites] = useState([]);
  // State to manage loading indicator
  const [loading, setLoading] = useState(false);

  // Function to add an item to favourites
  const addFavourite = (item) => {
    if(favourites.find((currentItem)=>currentItem.trackId===item.trackId)){
      return alert('item has already been added to favourites')
    }
    setFavourites((prev)=>[...prev, item]);
  };

  // Function to remove an item from favourites
  const removeFavourite = (item) => {
    setFavourites(favourites.filter(currentItem => currentItem.trackId !== item.trackId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>iTunes Search App</h1>
      </header>
      <main>
        <SearchForm setResults={setResults} setLoading={setLoading} />
        {loading && <LoadingIndicator />}
        <div className="content-container">
          <div className="results-container">
            <h2>Search Results</h2>
            <ResultsList results={results} addFavourite={addFavourite} />
          </div>
          <div className="favourites-container">
            <h2>Favourites</h2>
            <FavouriteList favourites={favourites} removeFavourite={removeFavourite} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
