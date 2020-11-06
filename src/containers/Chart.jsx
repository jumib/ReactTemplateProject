import React from "react";
import c3 from "c3";
import { useSelector } from "react-redux";


const Chart = () => {

    const decide = useSelector(state => (state.covidReducer.decide))

  React.useEffect(() => {
    c3.generate({
      bindto: "#chart",
      data: {
        json: {
            data: {decide}
        },
        type: "bar",
      },
    });
  }, []);
  
  return <div id="chart" />;
};

export default Chart