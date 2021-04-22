import { useRouter } from 'next/router';
import { IPlanetResults } from '../types';

function PlanetCard({ planet }: { planet: IPlanetResults }) {
  const { replace } = useRouter();

  const goToDetail = () => {
    replace(`/planet/${planet.url[planet.url.length - 2]}`);
  };

  return (
    <div
      role="button"
      className="py-2 sm:w-96 sm:mx-auto border-2 mb-4"
      onClick={goToDetail}
    >
      <h2 className="text-2xl text-center">{planet.name}</h2>
      <div className="p-4">
        <p>
          <span className="font-bold">Population</span>: {planet.population}
        </p>
        <p>
          <span className="font-bold">Climate</span>:{" "}
          <span className="capitalize">{planet.climate}</span>
        </p>
        <p>
          <span className="font-bold">Terrain</span>:{" "}
          <span className="capitalize">{planet.terrain}</span>
        </p>
        <p>
          <span className="font-bold">Diameter</span>: {planet.diameter} KM
        </p>
      </div>
    </div>
  );
}

export default PlanetCard;
