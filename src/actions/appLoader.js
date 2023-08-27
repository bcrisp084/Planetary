export const appLoader = async () => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      import.meta.env.VITE_REACT_APP_NASA_API_KEY
    }`
  );
  console.log("data", res);
  return await res.json();
};
