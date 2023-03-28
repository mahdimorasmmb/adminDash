import React from "react";

import Dropdown from "./Dropdown";
import Badge from "./Badge";
import DropdownLists from "./DropdownLists";
import { Avatar } from "./Avatar";

interface User {
  id: number;
  userName: string;
  imageUrl: string;
}

interface MessageType {
  id: number;
  text: string;
  date: string;
  user: User;
}

interface MessageNotifactionsProps {
  data: MessageType[];
}

const Message = ({ date, id, text, user }: MessageType) => {
  return (
    <div className="flex justify-between cursor-pointer">
      <Avatar src={user.imageUrl} />
      <div className="flex flex-1 flex-col space-y-1 ">
        <h3 className=" flex justify-between">
          {user.userName}
          <span className="float-left text-sm text-danger">
            <i className="fa fa-star"></i>
          </span>
        </h3>
        <p className="text-sm text-end">{text}</p>
        <p className="text-sm text-muted text-end">
          <i className="fa fa-clock-o mr-1"></i> {date}
        </p>
      </div>
    </div>
  );
};

const MessageNotifactions = ({ data }: MessageNotifactionsProps) => {
  return (
    <Dropdown
      toggle={
        <Badge
          size="sm"
          color="bg-red-500"
          icon={<i className="fa fa-comments-o text-base"></i>}
          count={3}
        />
      }
      dropdownItems={
        <DropdownLists
          list={data.map((item) => (
            <Message {...item} key={item.id} />
          ))}
        />
      }
      footer={
        <a href="#" >
          مشاهده همه نوتیفیکیشن
        </a>
      }
    />
  );
};

export default MessageNotifactions;
