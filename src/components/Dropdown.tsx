import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Avatar } from "./Avatar";
import Badge from "./Badge";
import userAvatar1 from "../assets/img/user1-128x128.jpg";
import userAvatar2 from "../assets/img/user8-128x128.jpg";
import userAvatar3 from "../assets/img/user3-128x128.jpg";

interface Props {
  toggle: ReactNode;
  dropdownItems: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
}

const Dropdown = ({ toggle, dropdownItems, footer, header }: Props) => {
  const [openSlide, setopenSlide] = useState(false);
  const catMenu = useRef<HTMLDivElement>(null);

  const closeOpenMenus = (e: TouchEvent | MouseEvent) => {
    if (
      catMenu.current &&
      openSlide &&
      !catMenu.current.contains(e.target as Node)
    ) {
      setopenSlide((prevState) => !prevState);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [catMenu, closeOpenMenus]);
  return (
    <div ref={catMenu} className=" dropdown">
      <button
        className="nav-link"
        onClick={() => setopenSlide((prevState) => !prevState)}
      >
        {toggle}
      </button>
      {openSlide && (
        <div
          className={`dropdown-menu min-w-[280px] max-w-[300px] dropdown-menu-left ${
            catMenu &&
            "show absolute top-0 left-0 transform translate-x-1 translate-y-11 "
          }`}
        >
          {header && (
            <>
              <div className=" dropdown-item dropdown-header text-center">{header}</div>{" "}
              <div className="dropdown-divider"></div>
            </>
          )}
          {dropdownItems}
          {footer && (
            <div className=" text-center dropdown-item dropdown-footer cursor-pointer">
              {footer}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
