import React from "react";
import { ReactScreenshotTest } from "react-screenshot-test";
import EchartsWrapper from "../../../components/EchartsWrapper";
import { optionLineMock } from "../../mock/data";

ReactScreenshotTest.create("EchartsWrapper bar chart screen")
  .viewport("Desktop", {
    width: 1024,
    height: 768
  })
  .viewport("iPhone X", {
    width: 375,
    height: 812,
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    isLandscape: false
  })
  .shoot("EchartsWrapper", <EchartsWrapper option={optionLineMock} />)
  .run();