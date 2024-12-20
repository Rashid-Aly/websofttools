import React from "react";
import PropTypes from "prop-types";

export default function CalculatedAge({ age }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="w-full px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Age Details
        </h3>
      </div>
      <div className="mt-4">
        <table className="min-w-full border-collapse divide-y-2 rounded-sm border-2 border-blue-500 text-center text-sm font-semibold">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-4 py-2">
                Years
              </th>
              <th scope="col" className="px-4 py-2">
                Days
              </th>
              <th scope="col" className="px-4 py-2">
                Hours
              </th>
              <th scope="col" className="px-4 py-2">
                Minutes
              </th>
              <th scope="col" className="px-4 py-2">
                Seconds
              </th>
            </tr>
          </thead>
          <tbody className=" border-1 border-blue-500 p-2 text-sm font-light">
            <tr>
              <td className="px-4 py-2">
                {age?.years} years {age?.months} months {age?.weeks} weeks{" "}
                {age?.days} Days{age?.day}
              </td>
              <td className="px-4 py-2">{age?.totalDays}</td>
              <td className="px-4 py-2">{age?.totalHours}</td>
              <td className="px-4 py-2">{age?.totalMinutes}</td>
              <td className="px-4 py-2">{age?.totalSeconds}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

CalculatedAge.propTypes = {
  age: PropTypes.shape({
    years: PropTypes.number,
    // totalMonths:PropTypes.number,
    // totalWeeks:PropTypes.number,
    totalDays: PropTypes.number,
    totalHours: PropTypes.number,
    totalMinutes: PropTypes.number,
    totalSeconds: PropTypes.number,
    months: PropTypes.number,
    weeks: PropTypes.number,
    days: PropTypes.number,
    day: PropTypes.string,
  }),
};
