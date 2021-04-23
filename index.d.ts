declare module "swapi-node" {
  import { IPlanetResponse, IPlanetResults } from './types';

  export function getPlanets(id?: number): Promise<IPlanetResponse | IPlanetResults>;

  export function getPerson(): Promise<any>;
}
