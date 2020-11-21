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
        //const decidedcount = localStorage.getItem('decidedcount')
    }, [])    

let chart = am4core.create("decidechart", am4charts.XYChart);
chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = covid
    

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