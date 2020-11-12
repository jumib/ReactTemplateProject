import React, {useState} from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { StockFinancial, StockNews } from "../../containers/stock";
import { CovidFinancial } from "../../containers/covid"
import SearchComponent from "containers/SearchComponent.jsx";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import StockLstm from "containers/stock/StockLstm";
const useStyles = makeStyles(styles);
// const [searchName, setSearch] = useState([])



export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Material Kit Ui"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <SearchComponent/>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
      <CustomTabs
        headerColor="primary"
        tabs={[
          {
            tabName: "긍정부정",
            tabIcon: Face,
            tabContent: (
              <StockNews />
            )
          },
          {
            tabName: "재무제표",
            tabIcon: Chat,
            tabContent: (
              <StockFinancial />
            )
          },
          {
            tabName: "경제키워드",
            tabIcon: Build,
            tabContent: (
              <CovidFinancial />
            )
          },
          {
            tabName: "LSTM",
            tabIcon: Build,
            tabContent: (
              <StockLstm />
            )
          }
        ]}
      />
      </div>
      <Footer />
    </div>
  );
}