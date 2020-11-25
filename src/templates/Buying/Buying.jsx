import React from 'react'
import {BuyMenu as Menu} from '../../components'

import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/components.js";
import Review from 'containers/buying/Review';

const useStyles = makeStyles(styles);


const Buying = ({children}) => {
    const classes = useStyles();
    return (
        <div>
            <Header
            brand="FLISTOCK"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
            height: 400,
            color: "white"
            }}
            />
            <br/><br/><br/><br/><br/>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <br/>
              </div>              
            </GridItem>
          </GridContainer>
        </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Review/>
      {/* <Menu />
        {children} */}
      </div>
            <Footer />
        </div>
    )
}

export default Buying