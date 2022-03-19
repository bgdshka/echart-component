import React, { useEffect, useState } from "react";
import Widget from "./components/Widget";
import { apiCallMock } from "./functions/api";
import { convertSeriesToOption } from "./functions/data";
import "./App.css";

function App() {
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
    <div className="App">
      <Widget
        option={option}
        type={type}
        handleChangeType={handleChangeType}
        intervalTime={intervalTime}
        handleChangeIntervalTime={handleChangeIntervalTime}
      />
    </div>
  );
}

export default App;
