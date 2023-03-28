import React from "react";
import DropdownItem from "./DropdownItem";

interface Props {
  list: Array<React.ReactNode>;
}

const DropdownLists = ({ list }: Props) => {
  return (
    <>
      {list.map((item) => (
        <DropdownItem key={item?.toString()}>{item}</DropdownItem>
      ))}
    </>
  );
};

export default DropdownLists;
