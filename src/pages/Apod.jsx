import { useLoaderData } from "react-router-dom";
import { appLoader } from "../actions/appLoader";

const Apod = () => {
  const data = useLoaderData();
  console.log("data", data);
  return (
    <div className="apod">
      <h1>Astronomy Picture of the Day</h1>
      <p className="apod-title">{data.title}</p>
      <img className="apod-image" src={data.url} alt={data.title} />
      <p className="apod-info">{data.explanation}</p>

      <button onClick={appLoader}>Load APOD</button>
    </div>
  );
};

export default Apod;
