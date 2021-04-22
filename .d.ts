import { IPlanetResponse, IPlanetResults } from './types';

declare module 'swapi-node' {

  export function getPlanets(): Promise<IPlanetResponse>;

  export function getPlanet(id: number): Promise<IPlanetResults>;

  export function getPerson(): Promise<any>;

};
