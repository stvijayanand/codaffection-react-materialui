import { FunctionComponent } from "react";
import { PageHeader } from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const Employees: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="New Employee"
        subTitle="React form with validation"
        icon={
          <PeopleOutlineTwoToneIcon fontSize="large"></PeopleOutlineTwoToneIcon>
        }
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm></EmployeeForm>
      </Paper>
    </>
  );
};

export default Employees;
