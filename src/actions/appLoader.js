export const appLoader = async ({ date }) => {
  const apiKey = import.meta.env.VITE_REACT_APP_NASA_API_KEY;
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  if (date) {
    url += `&date=${date}`;
  }
  const res = await fetch(url);
  return await res.json();
};
