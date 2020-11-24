import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
import { Link, Route } from "react-router-dom";
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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from "assets/jss/material-kit-react/views/components.js";
import Small from "components/Typography/Small";
import Button from '@material-ui/core/Button';
import history from '../../history'
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSearch = () => {
    history.push('/covid')
  };
  const handleBuy = () => {
    history.push('/total')
  };

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
      <Parallax image={require("assets/img/titleimg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
              <Fade top>
                <div>
                <h1 className={classes.title}>오직 당신을 위한 AI 펀드매니저.</h1>
                <br/><br/><br/><br/><br/><br/>
                <h3 className={classes.subtitle}>
                  학습된 인공지능으로 당신의 선택을 더 똑똑하게 만들어보세요.
                </h3>
                <br/>
              </div>
              <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                  Open alert dialog
                </Button>
                </div>
              </Fade>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      오늘 (2020년 3월 3일) 삼성전자의 매수를 권해드립니다.<br/>
                      구매하시겠습니까?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleSearch} color="primary">
                      알아보기
                    </Button>
                    <Button onClick={handleBuy} color="primary" autoFocus>
                      구매하기
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>              
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}
