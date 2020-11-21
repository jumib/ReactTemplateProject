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
import { StockNews } from "../../containers/stock";
import { CovidFinancial, CovidStock,  } from "../../containers/covid"
import Exchange from '../../containers/stock/Exchange'
import CovidStatus from '../../containers/covid/CovidStatus'
import SearchComponent from "containers/SearchComponent.jsx";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import StockLstm from "containers/stock/StockLstm";
import StockFinancial from "containers/stock/StockFinancial";
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
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className={classNames(classes.main, classes.mainRaised)}>
      <CustomTabs
        headerColor="info"
        tabs={[
          {
            tabName: "긍정부정",
            tabIcon: Face,
            tabContent: (
              <StockNews />
            )
          },
          {
            tabName: "코로나",
            tabIcon: Chat,
            tabContent: (
              <div>
              <CovidStock/>
              </div>
            )
          },
          {
            tabName: "환율정보",
            tabIcon: Chat,
            tabContent: (
              <div>
              <Exchange/>
              </div>
            )
          },
          {
            tabName: "경제키워드",
            tabIcon: Build,
            tabContent: (
              <CovidFinancial />
            )
          },
        ]}
      />
      </div>
      <Footer />
    </div>
  );
}