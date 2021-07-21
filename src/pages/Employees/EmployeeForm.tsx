import { Grid } from "@material-ui/core";
import { FunctionComponent } from "react";
import { Form, useForm } from "../../components/useForm";
import Controls from "../../components/controls/Controls";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hiredDate: new Date(),
  isPermanent: false,
};

const EmployeeForm: FunctionComponent = () => {
  const { values, setValues, handleInputChange, handleDateChange } =
    useForm(initialFieldValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          ></Controls.Input>
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          ></Controls.Input>
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="gender"
            label="Gender"
            value={values.gender}
            onChange={handleInputChange}
            items={genderItems}
          ></Controls.RadioGroup>
          <Controls.Select
            name="departmentId"
            label="Department"
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
          ></Controls.Select>
          <Controls.DatePicker
            onChange={handleDateChange}
            value={values.hiredDate}
            name="hiredDate"
            label="Hired Date"
          ></Controls.DatePicker>
          <Controls.Checkbox
            onChange={handleInputChange}
            value={values.isPermanent}
            name="isPermanent"
            color="primary"
            label="Is Permanent"
          ></Controls.Checkbox>
        </Grid>
      </Grid>
    </Form>
  );
};

export default EmployeeForm;
