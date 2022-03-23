import React from "react";
import EchartsWrapper from "../EchartsWrapper";
import "./Widget.css";

/**
 * Widget view component
 * @param {Object} $.option - chart data 
 * @param {Object} $.type - for inline style
 * @param {Function} $.handleChangeType - change widget type callback
 * @param {Number} $.intervalTime - current interval time to fetching data
 * @param {Function} $.handleChangeIntervalTime - change interval time callback
 */
function Widget({ option, type, handleChangeType, intervalTime, handleChangeIntervalTime }) {
  return (
    <div className="WidgetContainer">
      <div className="WidgetContainer__options">
        <select onChange={handleChangeType} value={type}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
        </select>
        <label>
          Интервал обовления (мс):{" "}
          <input value={intervalTime} onChange={handleChangeIntervalTime} type="number" />
        </label>
      </div>
      <EchartsWrapper option={option} style={{ height: "100%" }} />
    </div>
  );
}

export default Widget;
