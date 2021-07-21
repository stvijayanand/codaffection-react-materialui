import { makeStyles } from "@material-ui/core";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { ChangeEvent, FunctionComponent, useState } from "react";

interface FieldValues {
  id: number;
  fullName: string;
  email: string;
  mobile: string;
  city: string;
  gender: string;
  departmentId: string;
  hiredDate: Date;
  isPermanent: boolean;
}

export const useForm = (initialFieldValues: FieldValues) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
    // | ChangeEvent<{ name: string; value: unknown }>
  ) => {
    const { name, value, checked } = e.target;
    if (checked !== undefined) {
      setValues({
        ...values,
        [name]: checked,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
    // setValues((prevState) => {
    //   return {
    //     ...prevState,
    //     [name]: value,
    //   };
    // });
  };

  const handleDateChange = (
    date: MaterialUiPickersDate,
    value?: string | null | undefined
  ) => {};

  const [values, setValues] = useState(initialFieldValues);
  return {
    values,
    setValues,
    handleInputChange,
    handleDateChange,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

export const Form: FunctionComponent = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete="off">
      {props.children}
    </form>
  );
};
