import React from "react";

interface Props {
  header: React.ReactNode;
  body: React.ReactNode;
}

const Card = ({ header, body }: Props) => {
  return (
    <div className="bg-white py-2 px-4 flex flex-col mt-4 max-w-xs md:max-w-lg ">
      <h2 className="border-b-2 border-black py-4    ">{header}</h2>
      <div className="mt-4">{body}</div>
    </div>
  );
};

export default Card;
