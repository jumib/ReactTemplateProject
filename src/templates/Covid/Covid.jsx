import React from "react";
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
import SearchComponent from "containers/SearchComponent";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { MainInfo } from "containers/stock";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const stock = useSelector(state => (state.stockReducer.stock))

  console.log("stock = " + stock)

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
        <Parallax image={require("assets/img/bg.jpg")}>
          <div className={classes.container}>
            <SearchComponent/>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>

          <div>
            { stock != null ? ( <MainInfo /> ) : ( null ) }
          </div>

            <Link to="/stock">더 많은 정보 보기</Link>
        </div>
        <Footer />
      </div>
    )
}


// import React from "react";
// // nodejs library that concatenates classes
// import classNames from "classnames";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// // @material-ui/icons
// // core components
// import Header from "components/Header/Header.js";
// import Footer from "components/Footer/Footer.js";
// import Parallax from "components/Parallax/Parallax.js";
// // sections for this page
// import HeaderLinks from "components/Header/HeaderLinks.js";

// import styles from "assets/jss/material-kit-react/views/components.js";
// import SearchComponent from "containers/SearchComponent";
// import { useSelector } from 'react-redux'
// import { Link } from "react-router-dom";
// import { MainInfo } from "containers/stock";
// import { render } from "node-sass";

// const useStyles = makeStyles(styles);

// const Covid = (props) => {
//   const classes = useStyles();
//   const { ...rest } = props;
//   const stock = useSelector(state => (state.stockReducer.stock));

//   render () {
//     return (
//           <>
//             { stock != null ? ( <MainInfo/> ) : ( <></> ) }
//           </>
//     )
//   };
// };

// export default Covid