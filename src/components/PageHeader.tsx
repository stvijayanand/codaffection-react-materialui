import { Card, makeStyles, Paper, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";

interface Props {
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export const PageHeader: FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{props.icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {props.subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};
