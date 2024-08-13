import fetch from 'node-fetch';

// Function to fetch data from the iTunes API
export async function fetchiTunesData(term, media) {
  const response = await fetch(`https://itunes.apple.com/search?term=${term}&media=${media}`);
  const data = await response.json();
  return data;
}
