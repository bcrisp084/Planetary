import { useEffect, useState } from "react";
import { roverLoader } from "../actions/appLoader";
import HoverCarousel from "hover-carousel";

const Rover = () => {
  const [roverData, setRoverData] = useState([]);

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

  return (
    <div className="rover">
      <h1>Photos from the Mars rover</h1>
      <div className="carousel">
        <HoverCarousel images={images} height={400} width={400} />
      </div>
    </div>
  );
};

export default Rover;
