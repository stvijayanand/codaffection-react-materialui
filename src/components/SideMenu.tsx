import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import React, { FunctionComponent } from "react";

interface Props extends WithStyles<typeof style> {}

const style = createStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu: FunctionComponent<Props> = (props) => {
  return <div className={props.classes.sideMenu}></div>;
};

export default withStyles(style)(SideMenu);
