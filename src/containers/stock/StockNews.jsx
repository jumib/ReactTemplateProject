import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

am4core.useTheme(am4themes_animated);


const useStyles = makeStyles({
    location: {
        padding: '70px',
        textAlign: 'center',
    },
    size: {
        width: '100%',
        height: '600px'
    }

})

const StockNews = () => {

    const classes = useStyles();
    let chart = am4core.create("keywords", am4plugins_wordCloud.WordCloud);
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


    return (<div className={classes.location}>
        <React.Fragment>
        <h3>뉴스기사를 분석해 종목을 추천하는 시스템</h3>
        <Card>
            <CardContent>
            <table>
                <h3>counting ...</h3>
                <tr>
                    <th>긍정</th>
                    <th>부정</th>
                </tr>
                <tr>
                    <th>N개</th>
                    <th>N개</th>
                </tr>
            </table>
            <div id="keywords" className={classes.size}/>
            </CardContent>
        </Card>
        </React.Fragment>
    </div>           
    )}

    export default StockNews