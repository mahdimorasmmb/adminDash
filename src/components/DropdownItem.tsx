import React from "react";

interface Props {
  children: React.ReactNode;
}

const DropdownItem = ({ children }: Props) => {
  return (
    <>
      <div className="dropdown-item text-start ">{children}</div>
      <div className="dropdown-divider" />
    </>
  );
};

export default DropdownItem;
