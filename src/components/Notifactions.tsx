import React from "react";
import Badge from "./Badge";
import Dropdown from "./Dropdown";
import DropdownLists from "./DropdownLists";

interface NotifactionProps {
  id: number;
  icon: React.ReactNode;
  text: string;
  date: string;
}



const Notifaction = ({ date, icon, id, text }: NotifactionProps) => {
  return (
    <div className="flex justify-between cursor-pointer">
      <span>
        {" "}
        {icon} {text}
      </span>
      <span className="float-left text-muted text-sm">{date}</span>
    </div>
  );
};

const Notifactions = ({ list }: { list: NotifactionProps[] }) => {
  return (
    <Dropdown
      header={<span>15 نوتیفیکیشن</span>}
      footer={<a className="cursor-pointer">مشاهده همه نوتیفیکیشن</a>}
      toggle={<Badge className=" navbar-badge" />}
      dropdownItems={
        <DropdownLists
          list={list.map((item) => (
            <Notifaction {...item} key={item.id} />
          ))}
        />
      }
    />
  );
};

export default Notifactions;
