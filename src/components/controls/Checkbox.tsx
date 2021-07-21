import { ChangeEventHandler } from "react";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

interface CheckboxProps {
  label: string;
  value: boolean;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  color: "primary" | "secondary" | "default" | undefined;
}

const Checkbox = (props: CheckboxProps) => {
  const { name, value, label, onChange, color } = props;

  /* const convertToDefEventParam = (name: string, value: string) => ({
    target: {
      name,
      value,
    },
  }); */

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={value}
            onChange={onChange}
            name={name}
            color={color}
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
