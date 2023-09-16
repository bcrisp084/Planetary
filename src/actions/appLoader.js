export const appLoader = async ({ date }) => {
  const apiKey = import.meta.env.VITE_REACT_APP_NASA_API_KEY;
  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
  if (date) {
    url += `&date=${date}`;
  }
  const res = await fetch(url);
  return await res.json();
};

export const roverLoader = async () => {
  const apiKey = import.meta.env.VITE_REACT_APP_NASA_API_KEY;
  let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=NAVCAM&api_key=${apiKey}`;
  const res = await fetch(url);
  return await res.json();
};

export const planetLoader = async () => {
  const apiKey = import.meta.env.VITE_REACT_APP_PLANETS_INFO_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${apiKey}}`,
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
    },
  };
  const url = `https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/`;
  const res = await fetch(url, options);
  console.log("res", res);
  return await res.json();
};
