import React from "react";
import MessageNotifactions from "../MessageNotifactions";
import Notifactions from "../Notifactions";
import Profile from "./Profile";
import SearchBar from "./SearchBar";
import userAvatar1 from "../../assets/img/user1-128x128.jpg";
import userAvatar2 from "../../assets/img/user8-128x128.jpg";
import userAvatar3 from "../../assets/img/user3-128x128.jpg";
import NavItems from "./NavItems";
import { useProSidebar } from "react-pro-sidebar";

const notifactionData = [
  {
    id: 1,
    icon: <i className="fa fa-envelope ml-2"></i>,
    text: " 4 پیام جدید",
    date: "3 دقیقه",
  },
  {
    id: 2,
    icon: <i className="fa fa-users ml-2"></i>,
    text: " 8 درخواست دوستی",
    date: "12 ساعت",
  },
  {
    id: 3,
    icon: <i className="fa fa-file ml-2"></i>,
    text: "3 گزارش جدید",
    date: "2 روز",
  },
];

const messageData = [
  {
    id: 1,
    text: "با من تماس بگیر لطفا...",
    date: "4 ساعت قبل",
    user: {
      id: 1,
      userName: "حسام موسوی",
      imageUrl: userAvatar1,
    },
  },
  {
    id: 2,
    text: "من پیامتو دریافت کردم",
    date: "4 ساعت قبل",
    user: {
      id: 1,
      userName: "پیمان احمدی",
      imageUrl: userAvatar2,
    },
  },
  {
    id: 3,
    text: "پروژه اتون عالی بود مرسی واقعا",
    date: "4 ساعت قبل",
    user: {
      id: 1,
      userName: "سارا وکیلی",
      imageUrl: userAvatar3,
    },
  },
];

export const Navbar = () => {
  const { collapseSidebar,toggleSidebar,toggled } = useProSidebar();

  const toggle = () => {
    
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar(true);
    } else {
      console.log(false);
      collapseSidebar(false);
    }
  };
  return (
    <nav className="    main-header navbar navbar-expand  navbar-light border-bottom  ">
      <ul className="navbar-nav">
        <NavItems>
          <button onClick={() => toggle()}>
            <i className="fa fa-bars cursor-pointer  "></i>
          </button>
        </NavItems>
        <NavItems>
          <a href="index3.html" className="">
            خانه
          </a>
        </NavItems>
        <NavItems>
          <a href="#" className="">
            تماس
          </a>
        </NavItems>
      </ul>
      <SearchBar />
      <ul className="navbar-nav mr-auto ml-4">
        <li className="nav-item">
          <MessageNotifactions data={messageData} />
        </li>
        <li className="nav-item">
          <Notifactions list={notifactionData} />
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
          >
            <i className="fa fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};
