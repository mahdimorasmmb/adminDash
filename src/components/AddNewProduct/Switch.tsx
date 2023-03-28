import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  className?: string;
  name:string
}

const Switch = ({ label, className,name,...otherProps }: Props) => {
  return (
    <div className="custom-control custom-switch custom-switch-md my-2    ">
      <input
        className={`custom-control-input`}
        type="checkbox"
        role="switch"
        id={name}
        name={name}
        {...otherProps}
      />
      <label className={`custom-control-label  ${className} `} htmlFor={name}>
       {label}
      </label>
    </div>
  );
};

export default Switch;
