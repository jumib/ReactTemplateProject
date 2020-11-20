// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import { covidActions } from 'modules/covid.action';

// am4core.useTheme(am4themes_animated);

// const useStyles = makeStyles({
//   chart: {
//     height: '700px'
//   }
// })

// const CovidFinancial = () => {

//   const classes = useStyles()
//   const dispatch = useDispatch()
//   const words = useSelector(state => (state.covidReducer.words))

//   useEffect(() => {
//     dispatch(covidActions.getWords())
//   }, [])

//   let chart = am4core.create("chartfinance", am4charts.XYChart);
//   chart.padding(40, 40, 40, 40);

//   let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
//   categoryAxis.renderer.grid.template.location = 0;
//   categoryAxis.dataFields.category = "network";
//   categoryAxis.renderer.minGridDistance = 1;
//   categoryAxis.renderer.inversed = true;
//   categoryAxis.renderer.grid.template.disabled = true;

//   let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
//   valueAxis.min = 0;

//   let series = chart.series.push(new am4charts.ColumnSeries());
//   series.dataFields.categoryY = "network";
//   series.dataFields.valueX = "MAU";
//   series.tooltipText = "{valueX.value}"
//   series.columns.template.strokeOpacity = 0;
//   series.columns.template.column.cornerRadiusBottomRight = 5;
//   series.columns.template.column.cornerRadiusTopRight = 5;

//   let labelBullet = series.bullets.push(new am4charts.LabelBullet())
//   labelBullet.label.horizontalCenter = "left";
//   labelBullet.label.dx = 10;
//   labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
//   labelBullet.locationX = 1;

//   // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
//   series.columns.template.adapter.add("fill", function(fill, target){
//     return chart.colors.getIndex(target.dataItem.index);
//   });

//   categoryAxis.sortBySeries = series;
//   chart.data = [
//       {
//         "network": "Facebook",
//         "MAU": 2255250000
//       },
//       {
//         "network": "Google+",
//         "MAU": 430000000
//       },
//       {
//         "network": "Instagram",
//         "MAU": 1000000000
//       },
//       {
//         "network": "Pinterest",
//         "MAU": 246500000
//       },
//       {
//         "network": "Reddit",
//         "MAU": 355000000
//       },
//       {
//         "network": "TikTok",
//         "MAU": 500000000
//       },
//       {
//         "network": "Tumblr",
//         "MAU": 624000000
//       },
//       {
//         "network": "Twitter",
//         "MAU": 329500000
//       },
//       {
//         "network": "WeChat",
//         "MAU": 1000000000
//       },
//       {
//         "network": "Weibo",
//         "MAU": 431000000
//       },
//       {
//         "network": "Whatsapp",
//         "MAU": 1433333333
//       },
//       {
//         "network": "YouTube",
//         "MAU": 1900000000
//       }
//     ]
  
  
//   return (
//     <>
//     <div id="chartfinance" className={classes.chart}/>
//     </>
//   )
// }

// export default CovidFinancial


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { covidActions } from 'modules/covid.action';

am4core.useTheme(am4themes_animated);

const useStyles = makeStyles({
  chart: {
    height: '700px'
  }
})

const CovidFinancial = () => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const words = useSelector(state => (state.covidReducer.words))

  useEffect(() => {
    
    dispatch(covidActions.getWords())

    let chart = am4core.create("chartfinance", am4charts.XYChart);
  chart.padding(40, 40, 40, 40);

  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.dataFields.category = "word";
  categoryAxis.renderer.minGridDistance = 1;
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.disabled = true;

  let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.min = 0;

  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryY = "word";
  series.dataFields.valueX = "count";
  series.tooltipText = "{valueX.value}"
  series.columns.template.strokeOpacity = 0;
  series.columns.template.column.cornerRadiusBottomRight = 5;
  series.columns.template.column.cornerRadiusTopRight = 5;

  let labelBullet = series.bullets.push(new am4charts.LabelBullet())
  labelBullet.label.horizontalCenter = "left";
  labelBullet.label.dx = 10;
  labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
  labelBullet.locationX = 1;

  // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
  series.columns.template.adapter.add("fill", function(fill, target){
    return chart.colors.getIndex(target.dataItem.index);
  });

  categoryAxis.sortBySeries = series;
  chart.data = 
    words
    
  }, [])

  return (
    <>
    <div id="chartfinance" className={classes.chart}/>
    </>
  )
}

export default CovidFinancial
