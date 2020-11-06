import React from "react";
import c3 from "c3";


const Chart = () => {
  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250,30, 200, 100, 400, 150, 250, 150, 250,30, 200, 100, 400, 150, 250,30, 200],
        ],
        type: "bar",
      },
    });
  }, []);
  
  return <div id="chart" />;
};

export default Chart