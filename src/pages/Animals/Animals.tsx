import { useEffect, useState } from "react";
import { AnimalCard } from "../../components/AnimalCard/AnimalCard";
import { NavBar } from "../../components/NavBar/NavBar";
import { IAnimal } from "../../models/IAnimal";
import { getAnimals } from "../../services/getAnimals";
import "./Animals.css";
import { getFromLS } from "../../utils/LSFunctions";

export const Animals = () => {
  const [animalState, setAnimalState] = useState<IAnimal[]>(
    getFromLS("animalList") || []
  );

  useEffect(() => {
    getAnimals().then((animals) => setAnimalState(animals));
  }, []);

  console.log("Listan med djur ", animalState);

  return (
    <div className="animals__container">
      <NavBar></NavBar>
      <h2>Det här är våra djur!</h2>
      <ul className="animals__list">
        {animalState.map((animal) => {
          return <AnimalCard {...animal}></AnimalCard>;
        })}
      </ul>
    </div>
  );
};
