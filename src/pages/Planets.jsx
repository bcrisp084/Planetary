import { useState, useEffect } from "react";
import { planetLoader } from "../actions/appLoader";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  console.log(planetLoader);
  // useEffect(() => {
  //   async function getPlanets() {
  //     const planetData = await planetLoader();
  //     setPlanets(planetData);
  //   }
  // }, []);

  return <div></div>;
};

export default Planets;
