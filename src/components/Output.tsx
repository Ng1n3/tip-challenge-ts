import React from "react";

interface outputProp {
  bill: number;
  tip: number;
}

const Output = ({bill, tip} : outputProp) => {
  const total = tip + bill
  return (
    <h3>You pay &#8358;{total} ({bill} + {tip})</h3>
  )
}

export default Output;