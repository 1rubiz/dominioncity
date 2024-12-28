/* eslint-disable react/prop-types */

const FilterSection = ({ events, selectedEvent, setSelectedEvent }) => {
  return (
    <div className="grid grid-cols-2 w-full text-white md:flex-row gap-2 p-2 bg-gradient-to-r from-[#817F75] to-[#08090A] shadow-lg rounded-md">
      {/* Year Dropdown */}
      <div className="w-full col-span-2">
        {selectedEvent}
      </div>

      {/* Event Dropdown */}
      <div className="col-span-2 flex flex-col text-xs w-full">
        <label htmlFor="event-filter" className="text-gray-200 font-semibold mb-2 text-xs">
          Select Event
        </label>
        <select
          id="event-filter"
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 focus:ring focus:ring-blue-300 focus:outline-none"
        >
          <option value="">Select Event</option>
          {events.map((event) => (
            <option key={event} value={event}>
              {event}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
