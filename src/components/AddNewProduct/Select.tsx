import React from "react";

interface Props {
  label: string;
  options?: [
    {
      value: string;
      label: string;
      isSelected?: boolean;
    }
  ];
}


const Select = ({ label, options }: Props) => {
  return (
    <div className="form-group  max-w-xs  md:max-w-md  ">
      <label className="font-semibold my-2" htmlFor="inputState">
        {label}
      </label>
      <select id="inputState" className="form-control">
        {options?.map((item) => (
          <option key={item.value} selected={item.isSelected} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
