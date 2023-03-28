import React from "react";
import Multiselect from "multiselect-react-dropdown";

const MyMultiSelect = () => {
  const options = [
    { name: "کالای دیجیتال", id: 1 },
    { name: "موبایل", id: 2 },
    { name: "تبلت", id: 3 },
  ];
  return (
    <div  className="form-group "  >
         <label className="font-semibold" htmlFor="inputState">برچسب ها</label>
      <Multiselect
      
        className="!w-80 md:!w-[450px]"
        placeholder="انتخاب برچسب"
        options={options}
        displayValue="name"
        style={{
          chips: {
            background: "#DDDDDD",
            color:"#000000",
            fontWeight:"600",
            borderRadius:"0",
           
          },
          multiselectContainer: {
            color:"#000000",
            textAlign:"start",
            width:"420px"
          },
          searchBox: {
            "border": "1px solid #CED4DA",
            "border-radius": "0px",
            backgroundColor:'white'

           
          },
        }}
      />
    </div>
  );
};

export default MyMultiSelect;
