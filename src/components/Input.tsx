import React from "react";

interface Props {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
}

const Input = ({
  className,
  placeholder = 'مفدار ی وارد کنید',
  type = "text",
  value,
  onChange,
}: Props) => {
  return (
    <input
      className={` !text-xs form-control   ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
