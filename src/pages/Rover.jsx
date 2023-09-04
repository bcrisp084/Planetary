import { useEffect, useState } from "react";
import { roverLoader } from "../actions/appLoader";
import { useNavigate } from "react-router-dom";
import HoverCarousel from "hover-carousel";

console.log("useNavigate", useNavigate);

const Rover = () => {
  const [roverData, setRoverData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRoverData() {
      const roverData = await roverLoader();
      setRoverData(roverData);
    }
    fetchRoverData();
  }, []);
  const images = roverData.photos
    ? roverData.photos.map((photo) => photo.img_src)
    : [];

  console.log("images", images);
  return (
    <div>
      <h1>Rover</h1>
      <div className="carousel">
        <HoverCarousel images={images} height={400} width={400} />
      </div>
    </div>
  );
};

export default Rover;
