import { render } from "@testing-library/react";
import Planets from "../pages/planets";

describe("@@PAGE/planets", () => {
  test("renders Planets", () => {
    const {getByTestId} = render(<Planets planets={null} />);
    getByTestId('_page-planets');
  });
});
