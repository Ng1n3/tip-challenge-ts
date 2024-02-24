import React, { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import SelectPercentage from "./SelectPercentage";
import Reset from "./Reset";


const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number>(0);
  const [firstPercent, setFirstPercent] = useState<number>(0);
  const [secondPercent, setSecondPercent] = useState<number>(0);

  function handleReset() {
    setBill(0)
    setFirstPercent(0)
    setSecondPercent(0)
  }

  const tip = bill * ((firstPercent + secondPercent) / 2 / 100);
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage={firstPercent} onSelect={setFirstPercent}>How did you like our service</SelectPercentage>
  
      <SelectPercentage percentage={secondPercent} onSelect={setSecondPercent}>How did you like our service</SelectPercentage>

      <Output  bill={bill} tip={tip}/>
      <Reset onReset={handleReset}/>
    </div>
  )
}

export default TipCalculator;