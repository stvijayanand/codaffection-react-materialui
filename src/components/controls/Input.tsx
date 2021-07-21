import { TextField } from "@material-ui/core";
import { ChangeEventHandler } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = (props: InputProps) => {
  const { name, value, label, onChange } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    ></TextField>
  );
};

export default Input;
