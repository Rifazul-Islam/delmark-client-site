import React from "react";
import SelectTitle from "../../../../components/SelectTitle";
import { useLoaderData } from "react-router-dom";

const UpdateItems = () => {
  const item = useLoaderData();
  console.log("check", item);
  return (
    <div>
      <SelectTitle title="Update An Items" subTitle="Hurry down" />
    </div>
  );
};

export default UpdateItems;
