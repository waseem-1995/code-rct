import React, { forwardRef } from "react";
import PropTypes from "prop-types"
export const Pin = forwardRef(({ maxChar,forOnchange ,forBackspace},ref) => {

const handleKeyup=(e)=>{
  if(e.keyCode===8){
    ////hnadle backspace
forBackspace(e)

  }else{
    forOnchange(e)
  }
}



  return <input data-testid="pin-input"  maxLength={maxChar}
   //onChange={forOnchange } 
   ref={ref} 
  
  
  onKeyUp={handleKeyup}
  />;
})
Pin.propTypes = {
 
  maxChar: PropTypes.number.isRequired,
};
// Check maxChar prop here
