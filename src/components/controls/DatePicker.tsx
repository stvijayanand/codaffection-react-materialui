import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface DatePickerProps {
  label: string;
  name: string;
  value: Date;
  onChange: (
    date: MaterialUiPickersDate,
    value?: string | null | undefined
  ) => void;
}

const DatePicker = (props: DatePickerProps) => {
  const { name, value, label, onChange } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={onChange}
      ></KeyboardDatePicker>
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
