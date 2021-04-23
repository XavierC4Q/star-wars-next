import { NextApiRequest, NextApiResponse } from "next";
import swapi from "swapi-node";

const handlePlanet = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const planet = await swapi.getPlanets(parseInt(id as string));

    return res.status(200).json(planet);
  } catch (e) {
    console.error(e);
    return res.status(404).end();
  }
};

export default handlePlanet;
