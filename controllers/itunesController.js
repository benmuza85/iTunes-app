import { fetchiTunesData } from '../utils/itunesAPI.js';

// Controller function to handle search requests
export async function searchiTunes(req, res) {
  const { term, media } = req.query;
  try {
    // Fetch data from the iTunes API
    const data = await fetchiTunesData(term, media);
    // Send the fetched data as the response
    res.json(data);
  } catch (error) {
    // Handle any errors that occur during data fetching
    res.status(500).json({ error: 'Failed to fetch data from iTunes API' });
  }
}

