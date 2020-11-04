/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to={"/stock"} className={classes.link}>
            <Button color="transparent">
              Stock Page
            </Button>
          </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to={"/covid"} className={classes.link}>
            <Button color="transparent">
              Covid Page
            </Button>
          </Link>
      </ListItem>
      
      <ListItem className={classes.listItem}>
      <Link to={"/login-page"} className={classes.link}>
            <Button color="transparent">
              Login Page
            </Button>
          </Link>
      </ListItem>
    </List>
  );
}
