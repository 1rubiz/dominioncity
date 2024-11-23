/* eslint-disable react/prop-types */
import { useState } from "react";

const FilterSection = ({ events, onFilterChange }) => {
//   const [selectedYear, setSelectedYear] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");

//   const handleYearChange = (e) => {
//     const value = e.target.value;
//     setSelectedYear(value);
//     onFilterChange({ year: value, event: selectedEvent });
//   };

  const handleEventChange = (e) => {
    const value = e.target.value;
    setSelectedEvent(value);
    onFilterChange({ event: value });
  };

  return (
    <div className="grid grid-cols-2 w-full text-white md:flex-row gap-2 p-2 bg-gradient-to-r from-[#817F75] to-[#08090A] shadow-lg rounded-md">
      {/* Year Dropdown */}
      <div className="w-full col-span-2">
        {selectedEvent}
      </div>
      {/* <div className="col-span-1 flex flex-col text-xs w-full">
        <label htmlFor="year-filter" className="text-gray-200 font-semibold mb-2 text-xs">
          Select Year
        </label>
        <select
          id="year-filter"
          value={selectedYear}
          onChange={handleYearChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring focus:ring-blue-300 focus:outline-none"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div> */}

      {/* Event Dropdown */}
      <div className="col-span-2 flex flex-col text-xs w-full">
        <label htmlFor="event-filter" className="text-gray-200 font-semibold mb-2 text-xs">
          Select Event
        </label>
        <select
          id="event-filter"
          value={selectedEvent}
          onChange={handleEventChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring focus:ring-blue-300 focus:outline-none"
        >
          <option value="">All Events</option>
          {events.map((event) => (
            <option key={event.id} value={event.name}>
              {event.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
