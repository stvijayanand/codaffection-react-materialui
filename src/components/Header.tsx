import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { FunctionComponent } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: 0.6,
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
    },
  },
  btnRoot: {
    backgroundColor: "green",
  },
  btnLabel: {
    backgroundColor: "red",
  },
}));

const Header: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search Topics"
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="small"></SearchIcon>}
            ></InputBase>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton
            // classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon fontSize="small"></NotificationsNoneIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineIcon fontSize="small"></ChatBubbleOutlineIcon>
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon fontSize="small"></PowerSettingsNewIcon>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
