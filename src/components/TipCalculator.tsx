import React, { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import SelectPercentage from "./SelectPercentage";


const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [firstPercent, setFirstPercent] = useState<number>(0);
  const [secondPercent, setSecondPercent] = useState<number>(0);
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage={firstPercent} onSelect={setFirstPercent}>How did you like our service</SelectPercentage>
  
      <SelectPercentage percentage={secondPercent} onSelect={setSecondPercent}>How did you like our service</SelectPercentage>
    </div>
  )
}

export default TipCalculator;