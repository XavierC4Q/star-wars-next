import { NextApiRequest, NextApiResponse } from "next";
import swapi from 'swapi-node';

const handlePlanets = async (_: NextApiRequest, res: NextApiResponse) => {
    const planets = await swapi.getPlanets();
    return res.status(200).json(planets);
}

export default handlePlanets;