import React from "react";

const Loader = () => {
  return (
    <div
      role="status"
      className="mx-auto flex max-w-7xl flex-col gap-5 p-6 md:flex-row lg:px-8"
    >
      <div className="dark:bg-gray-700·md:w-1/2 w-full rounded bg-gray-300 p-6">
        <svg
          className="dark:text-gray-600·md:w-1/2 mx-auto w-full text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full  md:w-1/2">
        <div className="mb-3 mt-4 flex items-center space-x-3">
          <svg
            className="h-10 w-10 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-4 w-32 rounded-lg bg-gray-200 p-2 first-letter:rounded-lg dark:bg-gray-700"></div>
          </div>
        </div>

        <div className="mb-2.5 h-4 max-w-[30%] rounded-lg bg-gray-200 p-2 dark:bg-gray-700"></div>
        <div className="mb-2.5 mt-3 h-4 max-w-[60%] rounded-lg bg-gray-200 p-2 dark:bg-gray-700"></div>
        <div className="mb-2.5 mt-4 h-6 max-w-[90%] rounded-lg bg-gray-200 p-4 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-6 max-w-[90%] rounded-lg bg-gray-200 p-4 dark:bg-gray-700"></div>
      </div>
    </div>
  );
};

export default Loader;
