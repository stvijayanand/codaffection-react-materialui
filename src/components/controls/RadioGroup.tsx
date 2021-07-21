import { ChangeEventHandler } from "react";
import { Radio, RadioGroup as MuiRadioGroup } from "@material-ui/core";
import { FormControl, FormLabel, FormControlLabel } from "@material-ui/core";

interface RadioGroupProps {
  label: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  items: { id: string; title: string }[];
}

const RadioGroup = (props: RadioGroupProps) => {
  const { name, value, label, onChange, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item, index) => (
          <FormControlLabel
            key={item.id}
            value={item.id}
            control={<Radio></Radio>}
            label={item.title}
          ></FormControlLabel>
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
