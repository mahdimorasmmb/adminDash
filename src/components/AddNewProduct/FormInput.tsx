import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler;
  className?: string;
  value?: string | number;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  isRow?: boolean;
}

const FormInput = ({
  label,
  placeholder,
  onChange,
  className,
  type = "text",
  name,
  isRow = false,
  ...otherProps
}: Props) => {
  return (
    <div className={`form-group max-w-xs  md:max-w-md ${isRow && "row mr-2  "} ${className}`}>
      <label className="   font-semibold my-2" htmlFor={name}>
        {label}
      </label>
      {
        isRow ? (<div className="col-sm-10">
        <input
          onChange={onChange}
          type={type}
          className={`form-control !max-w-sm `}
          id={name}
          name={name}
          aria-describedby="emailHelp"
          placeholder={placeholder && placeholder}
          {...otherProps}
        />
      </div>):(
         <input
         onChange={onChange}
         type={type}
         className={`form-control  `}
         id={name}
         name={name}
         aria-describedby="emailHelp"
         placeholder={placeholder && placeholder}
         {...otherProps}
       />
      )
      }
    </div>
  );
};

export default FormInput;
