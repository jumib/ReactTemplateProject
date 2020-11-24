/*eslint-disable*/
import React, { useEffect, useState } from "react";
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
import history from '../../history'

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();

  const [user, setUser] = useState('')

  useEffect(() => {
    const user = sessionStorage.getItem('user')
    setUser(user)
  }, [])

  const logout = (e) => {
    alert('logout')
    e.preventDefault();
    sessionStorage.removeItem('user')
    window.location.reload()
  }

  console.log(user)

  return (
    <div>
      {user != null ? 
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Link to={"/covid"} className={classes.link}>
              <Button color="transparent">
                Covid Page
              </Button>
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
        <Link to={"/stock"} className={classes.link}>
              <Button color="transparent">
                Stock Page
              </Button>
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
        <Link to={"/total"} className={classes.link}>
              <Button color="transparent">
                Total Page
              </Button>
            </Link>
        </ListItem>
        {/* <ListItem className={classes.listItem}>
        <Link to={"/login-page"} className={classes.link}>
              <Button color="transparent">
                Login Page
              </Button>
            </Link>
        </ListItem> */}
        <ListItem className={classes.listItem}>
        <Link to={"/buying"} className={classes.link}>
              <Button color="transparent">
                My Page
              </Button>
            </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
        <Link to={"/"} className={classes.link}>
              <Button color="transparent" onClick={logout} >
                Logout
              </Button>
        </Link>
        </ListItem>
        </List>
        :
        <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Link to={"/signin"} className={classes.link}>
              <Button color="transparent">
                User Page
              </Button>
            </Link>
        </ListItem>
      </List>}
    </div>
  );
}
