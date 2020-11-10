import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Orders.js
// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

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


  let chart = am4core.create("wordcloud", am4plugins_wordCloud.WordCloud);
chart.fontFamily = "Courier New";
let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
series.randomness = 0.1;
series.rotationThreshold = 0.5;

series.data = [ {
    "tag": "javascript",
    "count": "1765836"
}, {
    "tag": "java",
    "count": "1517355"
}, {
    "tag": "c#",
    "count": "1287629"
}, {
    "tag": "php",
    "count": "1263946"
}, {
    "tag": "android",
    "count": "1174721"
}, {
    "tag": "python",
    "count": "1116769"
}, {
    "tag": "jquery",
    "count": "944983"
}, {
    "tag": "html",
    "count": "805679"
}, {
    "tag": "c++",
    "count": "606051"
}, {
    "tag": "ios",
    "count": "591410"
}, {
    "tag": "css",
    "count": "574684"
}, {
    "tag": "mysql",
    "count": "550916"
}, {
    "tag": "sql",
    "count": "479892"
}, {
    "tag": "asp.net",
    "count": "343092"
}, {
    "tag": "ruby-on-rails",
    "count": "303311"
}, {
    "tag": "c",
    "count": "296963"
}, {
    "tag": "arrays",
    "count": "288445"
}, {
    "tag": "objective-c",
    "count": "286823"
}, {
    "tag": ".net",
    "count": "280079"
}, {
    "tag": "r",
    "count": "277144"
}, {
    "tag": "node.js",
    "count": "263451"
}, {
    "tag": "angularjs",
    "count": "257159"
}, {
    "tag": "json",
    "count": "255661"
}, {
    "tag": "sql-server",
    "count": "253824"
}, {
    "tag": "swift",
    "count": "222387"
}, {
    "tag": "iphone",
    "count": "219827"
},];

series.dataFields.word = "tag";
series.dataFields.value = "count";

series.heatRules.push({
 "target": series.labels.template,
 "property": "fill",
 "min": am4core.color("#0000CC"),
 "max": am4core.color("#CC00CC"),
 "dataField": "value"
});

series.labels.template.urlTarget = "_blank";
series.labels.template.tooltipText = "{word}: {value}";

let hoverState = series.labels.template.states.create("hover");
hoverState.properties.fill = am4core.color("#FF0000");


  return (
    <div className={classes.location}>
    <React.Fragment>
      <h2>경제뉴스</h2>
      <div id="wordcloud" className={classes.size}/>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Ship To</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
    </div>
  );
}