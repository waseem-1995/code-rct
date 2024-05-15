import React from "react";
import CounterValue from "./CounterValue"
import CounterButtons from "./CounterButtons"

const Counter = () => {
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      <h2>counter</h2>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue/>
      <CounterButtons/>

      {/*h Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
