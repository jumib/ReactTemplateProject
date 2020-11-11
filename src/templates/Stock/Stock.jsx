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
      <Parallax>
        <div className={classes.container}>
          <SearchComponent/>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <StockNews />
        <StockFinancial />
        <CovidFinancial />
      </div>
      <Footer />
    </div>
  );
}
