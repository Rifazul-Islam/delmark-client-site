import React from "react";

const SelectTitle = ({ subTitle, title }) => {
  return (
    <div className="w-4/12 mx-auto my-8">
      <p className="text-yellow-500 pb-3"> ---{subTitle}---</p>
      <p className=" uppercase md:text-3xl border-y-4 py-4"> {title} </p>
    </div>
  );
};

export default SelectTitle;
