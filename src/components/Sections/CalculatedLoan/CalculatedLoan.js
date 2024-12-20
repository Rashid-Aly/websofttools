import React from "react";
import PropTypes from "prop-types";

const CalculatedLoan = ({ data, currency }) => {
  return (
    <div className="mx-auto max-w-7xl px-6  lg:px-8">
      <div className="w-full px-4 text-center sm:px-0">
        <h3 className="text-2xl font-semibold leading-7 text-gray-900">
          Your monthly Payment
        </h3>
        <div className="mt-6 text-4xl font-bold">
          {currency.name}
          {data.monthPayment}
        </div>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div className="space-y-14 text-xl font-medium text-gray-400">
          <div>Total payment paid </div>
          <div>Total interest paid</div>
        </div>
        <div className="space-y-9 text-xl font-medium text-gray-400 ">
          <div>
            {currency.name}
            {data.totalPayment}
          </div>
          <div>
            {currency.name}
            {data.totalInterest}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatedLoan;
CalculatedLoan.propTypes = {
  data: PropTypes.shape({
    monthPayment: PropTypes.number,
    totalPayment: PropTypes.number,
    totalInterest: PropTypes.number,
  }),
  currency: PropTypes.string,
};
