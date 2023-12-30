import React from "react";

const SubFooter = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div>
      <h1>{currentYear} Your Company Name. All Rights Reserved.</h1>
    </div>
  );
};

export default SubFooter;
