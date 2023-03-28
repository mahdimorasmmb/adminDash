import React from "react";

interface Props {
  children: React.ReactNode;
  
}

const NavItems = ({ children }: Props) => {
  return <li className="nav-item nav-link ">{children}</li>;
};

export default NavItems;
