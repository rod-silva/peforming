import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface InputCalendarProps {
  slectedData: Date;
}

export const InputCalendar: React.FC<InputCalendarProps> = ({
  slectedData,
}) => {
  return (
    <DatePicker
      selected={slectedData}
      onChange={(event) => console.log(event)}
    />
  );
};
