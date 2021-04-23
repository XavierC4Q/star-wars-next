import { NextPageContext } from "next";
import fetch from "isomorphic-unfetch";
import { IPlanetResults } from "../../types";

interface IProps {
  id: string;
  planet: IPlanetResults | null;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps(
  {params}: NextPageContext & { params: { [key: string]: any } }
) {
  const req = await fetch(
    `http://localhost:3000/api/handlePlanet/${params.id}`
  );
  const planet = await req.json();

  if (!planet) {
    return {
      404: true,
      planet: null,
    };
  }
  return {
    props: {
      id: params.id,
      planet,
    }
  };
}

function PlanetDetail({ planet }: IProps) {
  return <div data-testid="_page-planet-id"></div>;
}

export default PlanetDetail;
