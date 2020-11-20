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
import { stockActions } from 'modules/stock.action';

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

  const emotion = useSelector(state => (state.stockReducer.emotion))  
  const dispatch = useDispatch()
  const classes = useStyles();
  const covid = useSelector(state => (state.covidReducer.covid))

  //------------히스토리푸시 후 확진자 수 저장----------
  //   const decide = useSelector(state => (state.stockReducer.decide))
  //   localStorage.setItem('decide', decide)


  

  useEffect(() => { 
  
  // const stockName = localStorage.getItem('stockName')
  // dispatch(stockActions.getEmotion(stockName))

  }, [])
  
  let chart = am4core.create("keywords", am4plugins_wordCloud.WordCloud);
  let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

  series.accuracy = 4;
  series.step = 15;
  series.rotationThreshold = 0.7;
  series.maxCount = 200;
  series.minWordLength = 2;
  series.labels.template.margin(4,4,4,4);
  series.maxFontSize = am4core.percent(30);

  series.data = [emotion]
  
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
        <h3>뉴스기사를 크롤링해 단어의 성향을 분석</h3>
        <Card>
            <CardContent>
            <table>
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