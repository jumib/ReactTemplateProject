import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.8rem",
    fontWeight: "700",
    display: "inline-block",
    position: "center",
    textShadow: "2px 2px 2px gray"
  },
  subtitle: {
    fontSize: "1.5rem",
    maxWidth: "800px",
    margin: "10px 0 0",
    position: "center",
    textShadow: "1px 1px 2px black"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    textAlign: "center",
    margin: "-60px 30px 0px",
    
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
