import React, { useState } from "react";

const useMap = ({ mapData }) => {
  const [item, setItem] = useState({});

  {
    mapData.map((item) => {
      setItem(item);
    });
  }

  return { item };
};

export default useMap;
