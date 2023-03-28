import React from "react";
import Input from "../Input";

const SearchBar = () => {
  return (
    <form className="form-inline hidden md:block   mr-3">
      <div className="input-group ">
        <Input
          placeholder="جستجو"
          className="  form-control-navbar h-7    rounded-l-none"
        />
        <div className="input-group-propend ">
          <button
            className=" input-group-text h-7 rounded-r-none   "
            type="submit"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
