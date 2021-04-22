import { NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import { IPlanetResults } from '../../types';

interface IProps {
    planet: IPlanetResults | null;
}

export async function getStaticProps({ query }: NextPageContext) {
  const planet = await fetch(
    `http://localhost:3000/api/handlePlanet/${query.id}`
  );
  if (!planet) {
    return {
      404: true,
      planet: null
    };
  }
  return {
    id: query.id,
    planet
  };
}

function PlanetDetail({}: IProps) {
    return <div data-testid="_page-planet-id"></div>
}


export default PlanetDetail;
