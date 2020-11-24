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
import {ChatbotContainer as Chatbot} from '../../containers/chatbot'
import styles from "assets/jss/material-kit-react/views/components.js";
import TotalLstm from "containers/total/TotalLstm";
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(styles);
// const [searchName, setSearch] = useState([])



export default function Total(props) {
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
      <div className={classNames(classes.main, classes.mainRaised)}>
        <br/><br/><br/><br/><br/><br/>
        <div>
        <TotalLstm/>
        </div>
        <Grid item xs={12}>
          <Chatbot/>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
