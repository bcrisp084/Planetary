import { useState, useEffect } from "react";
import { planetLoader } from "../actions/appLoader";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    async function getPlanets() {
      const planetData = await planetLoader();
      setPlanets(planetData);
    }
    getPlanets();
  }, []);

  return <div></div>;
};

export default Planets;
