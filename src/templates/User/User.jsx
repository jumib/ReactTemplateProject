import React from "react";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import { UserMenu as Menu } from '../../components'
// nodejs library that concatenates classes
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

const useStyles = makeStyles(styles);

export default function Components({children}) {
  const classes = useStyles();
  const { ...rest } = {children};
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
      <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className={classes.container}>
        </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Menu />
        {children}
      </div>
      <Footer />
    </div>
  );
}
