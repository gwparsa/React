import React from "react";

function Test() {
  return (
    <React.Fragment>
      <p>Salam in yek component test ast!</p>
      <p>{Math.round(Math.random() * 100)}</p>
    </React.Fragment>
  );
}

export default Test;
