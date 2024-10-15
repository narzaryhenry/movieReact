import { useState } from "react";
import Seat from "./Seat";
import "./Seats.css";

const Seats = () => {
  const seatData = [
    { row: "A", seats: Array(8).fill(false) },
    { row: "B", seats: [false, false, false, true, true, false, false, false] },
    { row: "C", seats: [false, false, false, false, false, false, true, true] },
    { row: "D", seats: Array(8).fill(false) },
    { row: "E", seats: [false, false, false, true, true, false, false, false] },
    { row: "F", seats: [false, false, false, false, true, true, true, true] },
    { row: "G", seats: Array(8).fill(false) },
    { row: "H", seats: Array(8).fill(true) },
  ];

  return (
    <div className="container">
      <div className="screen">
        <span>SCREEN</span>
      </div>
      {seatData.map((rowData) => (
        <div className="row" key={rowData.row}>
          {rowData.seats.map((sold, index) => {
            const seatName = `${rowData.row}${index + 1}`;
            return <Seat key={seatName} name={seatName} sold={sold} />;
          })}
        </div>
      ))}
    </div>
  );
};

export default Seats;
