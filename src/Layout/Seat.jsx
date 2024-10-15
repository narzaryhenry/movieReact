import { useState } from "react";
import "./Seat.css";

const Seat = ({ name, sold }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const seatClassName = `seat ${sold ? "sold" : ""}${
    isSelected ? " selected" : ""
  }`;

  return (
    <div className={seatClassName} data-name={name} onClick={handleClick}>
      {name}
    </div>
  );
};

export default Seat;
