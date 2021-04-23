import { render } from "@testing-library/react";
import PlanetDetail from "../pages/planet/[id]";

describe("@@PAGE/planet/[id]", () => {
  test("renders the planet/[id]", () => {
    const { getByTestId } = render(<PlanetDetail id="1" planet={null} />);
    getByTestId("_page-planet-id");
  });
});
