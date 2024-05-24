import React, { useState } from 'react';

// Sample holiday data
const holidays = [
  { date: '2024-01-01', name: 'New Year' },
  { date: '2024-07-04', name: 'Independence Day' },
  // Add more holidays as needed
];

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Function to get holidays for the selected month
  const getHolidaysForMonth = () => {
    const year = selectedMonth.getFullYear();
    const month = selectedMonth.getMonth() + 1; // Month is zero-based
    return holidays.filter(holiday => {
      const holidayDate = new Date(holiday.date);
      return holidayDate.getFullYear() === year && holidayDate.getMonth() + 1 === month;
    });
  };

  return (
    <div>
      <h2>{selectedMonth.toLocaleString('default', { month: 'long' })}</h2>
      <button onClick={() => setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1))}>Previous Month</button>
      <button onClick={() => setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1))}>Next Month</button>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {/* Render calendar days here */}
          {/* You can use libraries like react-calendar for this */}
        </tbody>
      </table>
      <div>
        <h3>Holidays</h3>
        <ul>
          {getHolidaysForMonth().map(holiday => (
            <li key={holiday.date}>{holiday.date} - {holiday.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
