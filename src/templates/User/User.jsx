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
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>어떤 종목이든 검색 한 번이면 끝.</h1>
                <br/><br/><br/>
                <h3 className={classes.subtitle}>
                  학습된 인공지능이 당신의 선택을 더 똑똑하게 만들어주죠.
                </h3>
                <br/>
                <Link to='' className={classes.subtitle}>지금 바로 만나보세요 ＞</Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Menu />
      </div>
      <Footer />
    </div>
  );
}
