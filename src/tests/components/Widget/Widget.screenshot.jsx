import React from "react";
import { ReactScreenshotTest } from "react-screenshot-test";
import Widget from "../../../components/Widget";
import "../../../components/Widget/Widget.css";
import { optionBarMock } from "../../mock/data";

ReactScreenshotTest.create("Widget bar chart screen")
  .viewport("Desktop", {
    width: 1024,
    height: 768,
  })
  .viewport("iPhone X", {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    isLandscape: false,
  })
  .shoot(
    "widget",
    <Widget
      option={optionBarMock}
      type={"bar"}
      handleChangeType={() => {}}
      intervalTime={1000}
      handleChangeIntervalTime={() => {}}
    />,
  )
  .run();
