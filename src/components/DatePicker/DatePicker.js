import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({
  selectedDate,
  handleDateChange,
  placeholderText,
}) => {
  return (
    <div className="relative w-full">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholderText}
        wrapperClassName="date-picker"
        className="border-1 w-full rounded border-black py-2 text-center"
      />
    </div>
  );
};

export default CustomDatePicker;

CustomDatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func,
  placeholderText: PropTypes.string,
};
