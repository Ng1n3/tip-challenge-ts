import React, { ChangeEvent } from "react";
interface selectPercentageProp {
  children: string;
  percentage: number;
  onSelect: (value: number) => void;
}

const SelectPercentage: React.FC<selectPercentageProp> = ({
  children,
  percentage,
  onSelect,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    onSelect(Number(e.target.value));
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={handleChange}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was great (20%) </option>
      </select>
    </div>
  );
};

export default SelectPercentage;
