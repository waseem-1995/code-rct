import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { Pin } from "./Pin";

export const PinTab = ({ length, maxChar, setOtp }) => {
  const [pintabLength] = useState(new Array(length).fill("0"));
  const [pintabvalue] = useState(new Array(length).fill("0"));

  ///////focus/////
  const inputRef = useRef([]);

  //////onchange event////

  const handleChange = (e, index) => {
    pintabvalue[index] = e.target.value;

    if (
      index < length - 1 &&
      inputRef.current[index].value.length === maxChar
    ) {
      inputRef.current[index + 1].focus();
    }

    setOtp(pintabvalue.join(""));
  };
  const handleBackspace = (e, index) => {
    pintabvalue[index] = e.target.value;

    if (index > 0 && inputRef.current[index].value.length === 0) {
      inputRef.current[index - 1].focus();
    }

    setOtp(pintabvalue.join(""));
  };

  const handlePaste = (e) => {
    // e.preventDefault();
    console.log(e)
    const data = e.clipboardData
    // abcdefghijklmnopo

      .getData("text")
      .split("")
      .filter((ele, index) => index < maxChar * length);

    console.log(data);
    let values = [];
    for (let i = 0; i < length * maxChar; i += maxChar) {
      let temp = "";
      for (let j = i; j < maxChar + i; j++) {
        temp += data[j];
      }
      values.push(temp);
      console.log(values);
      // values[i]=data[i]+data[i+1]
      // console.log(values)
    }
    values.forEach((ele, index) => {
      pintabvalue[index] = ele;
      inputRef.current[index].value = ele;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
      setOtp(pintabvalue.join(""));
    });
   
  };

  return (
    <div data-testid="pin-tab" onPaste={handlePaste}>
      {/* Add Pin component here  */}

      {pintabLength.map((ele, index) => {
        return (
          <Pin
            key={index}
            maxChar={maxChar}
            ref={(ele) => {
              inputRef.current[index] = ele;
            }}
            forOnchange={(e) => handleChange(e, index)}
            forBackspace={(e) => handleBackspace(e, index)}
          />
        );
      })}
    </div>
  );
};


PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number,
};

// Check length and maxChar props here

