// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { stockActions } from 'modules/stock.action';
// import { covidActions } from 'modules/covid.action';

// const useStyles = makeStyles({
//     container: {
//         display: 'flex',
//         flexWrap: 'wrap',
//       },
//     chart: {
//         height: '800px',
//         maxwidth: '1300px',
//         padding: "70px"
//     }
//   });


// const TotalLstm = () => {
//     const classes = useStyles();
//     const dispatch = useDispatch()

// const totalLstm = useSelector(state => (state.covidReducer.totalLstm))

// useEffect(() => {

// //  localStorage.getItem('stockName')
// // dispatch(covidActions.getTotalLstm(stockName))

// }, [])

// // localStorage.removeItem('stockName')
// // alert('remove success')
// // console.log(localStorage.getItem('stockName'))

//     return (
//     <div>
//         <h2>EXPECT STOCK PRICE</h2>
//         <div id="stocklstm" className={classes.chart}></div>
//         <div>
//             <h2>RESULT</h2>
//         <p>예측된 다음 날의 주가는 %%%원 입니다.</p>
//         </div>  
//     </div>         
//     )
// }
// export default TotalLstm

import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import { AutoDate, PickDate } from ".";
import classNames from "classnames";


const styles = {
  textCenter: {
    textAlign: "center"
  }
};

const useStyles = makeStyles(styles);

const TotalLstm = () => {

  const classes = useStyles();

  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
        <CustomTabs
            headerColor="info"
            tabs={[
            {
                tabName: "Profile",
                tabIcon: Face,
                tabContent: (
                <PickDate/>
                )
            },
            {
                tabName: "Messages",
                tabIcon: Chat,
                tabContent: (
                <AutoDate/>
                )              
            },
            ]}
        />
        </div>
    </div>    
    )    
}
export default TotalLstm
