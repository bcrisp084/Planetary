import { useLoaderData } from "react-router-dom";
import dotenv from "dotenv";

const Apod = () => {
  const data = useLoaderData();
  return (
    <>
      <h1>APOD</h1>
    </>
  );
};

export const apodLoader = async () => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
  );
  return await res.json();
};

export default Apod;
