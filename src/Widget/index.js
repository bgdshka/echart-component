import React, { useEffect, useState } from "react";
import EchartsWrapper from "../EchartsWrapper";
import { apiCallMock } from "../functions/api";
import { convertSeriesToOption } from "../functions/data";
import "./Widget.css";

/**
 * Widget, that can be placed in `<iframe>` if needed
 */
function Widget() {
  const [intervalTime, setIntervalTime] = useState(1000);
  const [option, setOption] = useState({});
  const [type, setType] = useState("bar");

  const handleChangeType = ({ target: { value } }) => {
    setType(value);
  };

  const handleChangeIntervalTime = ({ target: { value } }) => {
    setIntervalTime(Number(value));
  };

  useEffect(() => {
    async function fetchAndConvertData() {
      try {
        const { data } = await apiCallMock();
        const convertedData = convertSeriesToOption([{ data, type }]);
        setOption(convertedData);
      } catch (e) {
        console.log(e);
      }
    }

    const interval = setInterval(() => {
      fetchAndConvertData();
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime, type]);

  useEffect(() => {
    if (option) setOption({ ...option, series: option.series?.map(range => ({ ...range, type })) });
  }, [type]);

  return (
    <div className="WidgetContainer">
      <div className="WidgetContainer__options">
        <select onChange={handleChangeType} value={type}>
          <option value="bar">Bar</option>
          <option value="line">Line</option>
        </select>
        <label>
          Интервал обовления (мс):{" "}
          <input value={intervalTime} onChange={handleChangeIntervalTime} />
        </label>
      </div>
      <EchartsWrapper option={option} style={{ height: 400 }} />
    </div>
  );
}

export default Widget;
