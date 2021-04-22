import { render } from "@testing-library/react";
import PlanetDetail from "../pages/planet/[id]";

describe('@@PAGE/planet/[id]', () => {
    test('renders the planet/[id]', () => {
        const {} = render(<PlanetDetail planet={null}/>)
    })
})