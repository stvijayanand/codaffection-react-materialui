import { ChangeEventHandler } from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
} from "@material-ui/core";
import { MenuItem } from "@material-ui/core";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<{ name?: string | undefined; value: unknown }>;
  options: { id: string; title: string }[];
}

const Select = (props: SelectProps) => {
  const { name, value, label, onChange, options } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
