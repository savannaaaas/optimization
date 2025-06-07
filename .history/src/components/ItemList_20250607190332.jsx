import React, { useMemo } from "react";
export const ItemList = ({ people, stateInput }) => {
  const optim = useMemo(() => {}, [people, stateInput]);
  return <>{optim}</>;
};
