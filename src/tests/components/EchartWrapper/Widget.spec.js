import React from "react";
import renderer from "react-test-renderer";
import EchartsWrapper from "../../../components/EchartsWrapper";
import { optionBarMock } from "../../mock/data";

it("Bar chart renders correctly", () => {
  const tree = renderer
    .create(
      <EchartsWrapper
        option={optionBarMock}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
