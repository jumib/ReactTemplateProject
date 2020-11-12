import React,{useEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {makeStyles} from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux';
import { covidActions } from 'modules/covid.action';


am4core.useTheme(am4themes_animated);
// Themes end
const useStyles = makeStyles(() => ({
    chart: {
      height: '500px',
      maxwidth: '1300px',
      padding: "70px"
    }
  }))


const CovidDecideChart = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
  const covid = useSelector(state => (state.covidReducer.covid))

    useEffect(() => {
        dispatch(covidActions.getDecide())
}, [])

let chart = am4core.create("decidechart", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
    {
        "diff": 9,
        "no": 89,
        "time": "2020-04-29",
        "totalCnt": 10761
    },
    {
        "diff": 4,
        "no": 90,
        "time": "2020-04-30",
        "totalCnt": 10765
    },
    {
        "diff": 9,
        "no": 91,
        "time": "2020-05-01",
        "totalCnt": 10774
    },
    {
        "diff": 6,
        "no": 92,
        "time": "2020-05-02",
        "totalCnt": 10780
    },
    {
        "diff": 13,
        "no": 93,
        "time": "2020-05-03",
        "totalCnt": 10793
    },
    {
        "diff": 8,
        "no": 94,
        "time": "2020-05-04",
        "totalCnt": 10801
    },
    {
        "diff": 3,
        "no": 95,
        "time": "2020-05-05",
        "totalCnt": 10804
    },
    {
        "diff": 2,
        "no": 96,
        "time": "2020-05-06",
        "totalCnt": 10806
    },
    {
        "diff": 4,
        "no": 97,
        "time": "2020-05-07",
        "totalCnt": 10810
    },
    {
        "diff": 12,
        "no": 98,
        "time": "2020-05-08",
        "totalCnt": 10822
    },
    {
        "diff": 18,
        "no": 99,
        "time": "2020-05-09",
        "totalCnt": 10840
    },
    {
        "diff": 34,
        "no": 100,
        "time": "2020-05-10",
        "totalCnt": 10874
    },
    {
        "diff": 35,
        "no": 101,
        "time": "2020-05-11",
        "totalCnt": 10909
    },
    {
        "diff": 27,
        "no": 102,
        "time": "2020-05-12",
        "totalCnt": 10936
    },
    {
        "diff": 26,
        "no": 103,
        "time": "2020-05-13",
        "totalCnt": 10962
    },
    {
        "diff": 29,
        "no": 104,
        "time": "2020-05-14",
        "totalCnt": 10991
    },
    {
        "diff": 27,
        "no": 105,
        "time": "2020-05-15",
        "totalCnt": 11018
    },
    {
        "diff": 19,
        "no": 106,
        "time": "2020-05-16",
        "totalCnt": 11037
    },
    {
        "diff": 13,
        "no": 107,
        "time": "2020-05-17",
        "totalCnt": 11050
    },
    {
        "diff": 15,
        "no": 108,
        "time": "2020-05-18",
        "totalCnt": 11065
    },
    {
        "diff": 13,
        "no": 109,
        "time": "2020-05-19",
        "totalCnt": 11078
    },
    {
        "diff": 32,
        "no": 110,
        "time": "2020-05-20",
        "totalCnt": 11110
    },
    {
        "diff": 12,
        "no": 111,
        "time": "2020-05-21",
        "totalCnt": 11122
    },
    {
        "diff": 20,
        "no": 112,
        "time": "2020-05-22",
        "totalCnt": 11142
    },
    {
        "diff": 23,
        "no": 113,
        "time": "2020-05-23",
        "totalCnt": 11165
    },
    {
        "diff": 25,
        "no": 114,
        "time": "2020-05-24",
        "totalCnt": 11190
    },
    {
        "diff": 16,
        "no": 115,
        "time": "2020-05-25",
        "totalCnt": 11206
    },
    {
        "diff": 19,
        "no": 116,
        "time": "2020-05-26",
        "totalCnt": 11225
    },
    {
        "diff": 40,
        "no": 117,
        "time": "2020-05-27",
        "totalCnt": 11265
    },
    {
        "diff": 79,
        "no": 118,
        "time": "2020-05-28",
        "totalCnt": 11344
    },
    {
        "diff": 58,
        "no": 119,
        "time": "2020-05-29",
        "totalCnt": 11402
    },
    {
        "diff": 39,
        "no": 120,
        "time": "2020-05-30",
        "totalCnt": 11441
    },
    {
        "diff": 27,
        "no": 121,
        "time": "2020-05-31",
        "totalCnt": 11468
    },
    {
        "diff": 35,
        "no": 122,
        "time": "2020-06-01",
        "totalCnt": 11503
    },
    {
        "diff": 38,
        "no": 123,
        "time": "2020-06-02",
        "totalCnt": 11541
    },
    {
        "diff": 49,
        "no": 124,
        "time": "2020-06-03",
        "totalCnt": 11590
    },
    {
        "diff": 39,
        "no": 125,
        "time": "2020-06-04",
        "totalCnt": 11629
    },
    {
        "diff": 39,
        "no": 126,
        "time": "2020-06-05",
        "totalCnt": 11668
    },
    {
        "diff": 51,
        "no": 127,
        "time": "2020-06-06",
        "totalCnt": 11719
    },
    {
        "diff": 57,
        "no": 128,
        "time": "2020-06-07",
        "totalCnt": 11776
    },
    {
        "diff": 38,
        "no": 129,
        "time": "2020-06-08",
        "totalCnt": 11814
    },
    {
        "diff": 38,
        "no": 130,
        "time": "2020-06-09",
        "totalCnt": 11852
    },
    {
        "diff": 50,
        "no": 131,
        "time": "2020-06-10",
        "totalCnt": 11902
    },
    {
        "diff": 45,
        "no": 132,
        "time": "2020-06-11",
        "totalCnt": 11947
    },
    {
        "diff": 56,
        "no": 133,
        "time": "2020-06-12",
        "totalCnt": 12003
    },
    {
        "diff": 48,
        "no": 134,
        "time": "2020-06-13",
        "totalCnt": 12051
    },
    {
        "diff": 34,
        "no": 135,
        "time": "2020-06-14",
        "totalCnt": 12085
    },
    {
        "diff": 36,
        "no": 136,
        "time": "2020-06-15",
        "totalCnt": 12121
    },
    {
        "diff": 34,
        "no": 137,
        "time": "2020-06-16",
        "totalCnt": 12155
    },
    {
        "diff": 43,
        "no": 138,
        "time": "2020-06-17",
        "totalCnt": 12198
    },
    {
        "diff": 59,
        "no": 139,
        "time": "2020-06-18",
        "totalCnt": 12257
    },
    {
        "diff": 49,
        "no": 140,
        "time": "2020-06-19",
        "totalCnt": 12306
    },
    {
        "diff": 67,
        "no": 141,
        "time": "2020-06-20",
        "totalCnt": 12373
    },
    {
        "diff": 48,
        "no": 142,
        "time": "2020-06-21",
        "totalCnt": 12421
    },
   
    
];

chart.dateFormatter.inputDateFormat = "YYYY-MM-dd";
chart.zoomOutButton.disabled = true;

let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.grid.template.strokeOpacity = 0;
dateAxis.renderer.minGridDistance = 10;
dateAxis.dateFormats.setKey("day", "d");
dateAxis.tooltip.hiddenState.properties.opacity = 1;
dateAxis.tooltip.hiddenState.properties.visible = true;


let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.fillOpacity = 0.3;
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.cursorTooltipEnabled = false;

// goal guides
let axisRange = valueAxis.axisRanges.create();
axisRange.value = 6000;
axisRange.grid.strokeOpacity = 0.1;
axisRange.label.text = "Goal";
axisRange.label.align = "right";
axisRange.label.verticalCenter = "bottom";
axisRange.label.fillOpacity = 0.8;

valueAxis.renderer.gridContainer.zIndex = 1;

let series = chart.series.push(new am4charts.ColumnSeries);
series.dataFields.valueY = "diff";
series.dataFields.dateX = "time";
series.tooltipText = "{valueY.value}";
series.tooltip.pointerOrientation = "vertical";
series.tooltip.hiddenState.properties.opacity = 1;
series.tooltip.hiddenState.properties.visible = true;


let columnTemplate = series.columns.template;
columnTemplate.width = 5;
columnTemplate.column.cornerRadiusTopLeft = 10;
columnTemplate.column.cornerRadiusTopRight = 10;
columnTemplate.strokeOpacity = 0;



let cursor = new am4charts.XYCursor();
cursor.behavior = "panX";
chart.cursor = cursor;
cursor.lineX.disabled = true;

// chart.events.on("datavalidated", function () {
//     dateAxis.zoomToDates(new Date(2018, 0, 21), new Date(2018, 1, 1), false, true);
// });

let middleLine = chart.plotContainer.createChild(am4core.Line);
middleLine.strokeOpacity = 1;
middleLine.stroke = am4core.color("#000000");
middleLine.strokeDasharray = "2,2";
middleLine.align = "center";
middleLine.zIndex = 1;


cursor.events.on("cursorpositionchanged", updateTooltip);
dateAxis.events.on("datarangechanged", updateTooltip);

function updateTooltip() {
    dateAxis.showTooltipAtPosition(0.5);
    series.showTooltipAtPosition(0.5, 0);
    series.tooltip.validate(); // otherwise will show other columns values for a second
}


let label = chart.plotContainer.createChild(am4core.Label);
label.text = "Pan chart to change date";


    return (
        <div id="decidechart" className={classes.chart}/>
    )
}

export default CovidDecideChart