import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { covidActions } from 'modules/covid.action';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Orders.js
// Generate Order Data


const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  location: {
    padding: '0 90px '
  },
  size: {
      width: '100%',
      height: '600px'
  }
}));

export default function CovidFinancial() {
  const classes = useStyles();

  const dispatch = useDispatch()
  const words = useSelector(state => (state.covidReducer.words))
  
  useEffect(() => {
    // dispatch(covidActions.getWords())
  }, []);


  let chart = am4core.create("wordcloud", am4plugins_wordCloud.WordCloud);
  let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

  series.accuracy = 4;
  series.step = 15;
  series.rotationThreshold = 0.7;
  series.maxCount = 200;
  series.minWordLength = 2;
  series.labels.template.margin(4,4,4,4);
  series.maxFontSize = am4core.percent(30);

  series.data = [
    {
      "tag": "Breaking News",
      "weight": 60
    }, {
      "tag": "Environment",
      "weight": 80
    }, {
      "tag": "Politics",
      "weight": 90
    }, {
      "tag": "Business",
      "weight": 25
    }, {
      "tag": "Lifestyle",
      "weight": 30
    }, {
      "tag": "World",
      "weight": 45
    }, {
      "tag": "Sports",
      "weight": 160
    }, {
      "tag": "Fashion",
      "weight": 20
    }, {
      "tag": "Education",
      "weight": 78
    }
  ];
  series.dataFields.word = "tag";
  series.dataFields.value = "weight"; 

  series.colors = new am4core.ColorSet();
  series.colors.passOptions = {}; // makes it loop

  //series.labelsContainer.rotation = 45;
  series.angles = [0,-90];
  series.fontWeight = "700"

  setInterval(function () {
    series.dataItems.getIndex(Math.round(Math.random() * (series.dataItems.length - 1))).setValue("value", Math.round(Math.random() * 10));
  }, 10000)

  return (
    <div className={classes.location}>
      <h2>경제뉴스</h2>
      <div id="wordcloud" className={classes.size}/>
    </div>
  );
}