import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { CovidFinancial, CovidStock, CovidStatus } from "containers/covid";
import SectionExamples from '../../containers/SectionExamples'
import SearchComponent from "containers/SearchComponent";

const useStyles = makeStyles(styles);

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
          <CovidStatus />
          <CovidFinancial />
          <CovidStock/>
          <SectionExamples />
      </div>
      <Footer />
    </div>
  );
}
