import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import "./App.css";
import Employees from "../pages/Employees/Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: 12,
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu></SideMenu>
      <div className={classes.appMain}>
        <Header></Header>
        <Employees></Employees>
      </div>
      <CssBaseline></CssBaseline>
    </ThemeProvider>
  );
}

export default App;
