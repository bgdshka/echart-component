import React from "react";
import renderer from "react-test-renderer";
import Widget from "../../../components/Widget";
import { optionBarMock, optionLineMock } from "../../mock/data";

it("Bar chart renders correctly", () => {
  const tree = renderer
    .create(
      <Widget
        option={optionBarMock}
        type={"bar"}
        handleChangeType={() => {}}
        intervalTime={1000}
        handleChangeIntervalTime={() => {}}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Line chart renders correctly", () => {
    const tree = renderer
      .create(
        <Widget
          option={optionLineMock}
          type={"line"}
          handleChangeType={() => {}}
          intervalTime={1000}
          handleChangeIntervalTime={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
