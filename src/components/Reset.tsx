import React from "react";

interface resetProp {
  onReset: () => void
}

const Reset = ({onReset}: resetProp) => {
  return <button onClick={onReset}>Reset</button>
}

export default Reset