import React, { ChangeEvent } from "react";

interface BillInputProps {
  bill: number;
  onSetBill: (value: number) => void;
}

const BillInput: React.FC<BillInputProps> = ({ bill, onSetBill }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onSetBill(Number(e.target.value));
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Enter your bill"
        value={bill}
        onChange={handleChange}
      />
    </div>
  );
};

export default BillInput;
