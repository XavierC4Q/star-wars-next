import { NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import { IPlanetResponse } from "../types";
import PlanetCard from '../components/planetCard';

interface IProps {
  planets: IPlanetResponse | null;
}

export async function getStaticProps({}: NextPageContext) {
  const planetReq = await fetch("http://localhost:3000/api/handlePlanets");
  const planets = await planetReq.json();

  return {
    props: {
      planets: planets || null,
    },
  };
}

function Planets({ planets }: IProps) {
  return (
    <div data-testid="_page-planets">
      <h1 className="text-4xl text-center mb-4">The Planets of Star Wars</h1>
      <div className="flex flex-col container mx-auto">
        {planets && planets.results.map((p) => <PlanetCard planet={p} />)}
      </div>
    </div>
  );
}


export default Planets;
