import { NextApiRequest, NextApiResponse } from "next";
import * as swapi from "swapi-node";

const handlePlanet = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    const planet = await swapi.getPlanet(id);
    console.log(planet);

    return res.status(200).json(planet);
  } catch (e) {
    console.error(e);
    return res.status(404).end();
  }
};

export default handlePlanet;
