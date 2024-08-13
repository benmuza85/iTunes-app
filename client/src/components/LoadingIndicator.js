import '../styles/LoadingIndicator.css';

// LoadingIndicator component to show a loading spinner
const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
