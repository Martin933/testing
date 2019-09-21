import React from "react";

// const change = a => {
//   console.log(a);
// };

const CustomButton = ({ a }) => {
  return (
    <div>
      {/* <p>its always good to see you</p> */}
      {/* <button onClick={() => prop}> click to change</button> */}
      {/* <button onClick={() => prop}> click to change</button> */}
      {/* <p>{a}</p> */}
      <button onClick={a}>this is the custom button</button>
    </div>
  );
};
export default CustomButton;
