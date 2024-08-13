import { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ setResults, setLoading }) => {
  // State to store the search term
  const [term, setTerm] = useState('');
  // State to store the selected media type
  const [media, setMedia] = useState('all');

  // Function to handle the search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Fetch search results from the backend
      const response = await fetch(`/api/search?term=${term}&media=${media}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error('Error fetching data from iTunes API', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-form">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search term"
        required
        className="search-input"
      />
      <select value={media} onChange={(e) => setMedia(e.target.value)} className="media-select">
        <option value="all">All</option>
        <option value="music">Music</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
      </select>
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchForm;
