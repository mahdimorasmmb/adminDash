import React from "react";

interface Props {
  src: any;
  className?: string;
  alt?: string;
}

export const Avatar = ({ alt='User Avatar', className, src }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-[50px] h-[50px] ml-3 rounded-full ${className}`}
    />
  );
};
