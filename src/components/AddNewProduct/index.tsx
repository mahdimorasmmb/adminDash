import React, { useState } from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import MultiSelect from "./MultiSelect";
import Select from "./Select";
import Switch from "./Switch";
import plashoulder from "../../assets/codepen-default-placeholder 6.svg";
import Card from "./Card";

const AddNewProduct = () => {
  const [fixed_fare, setFixed_fare] = useState(false);
  return (
    <form className="text-start py-4 px-4 bg-[#F4F6F9]">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <FormInput name="name_product" label="عنوان محصول" />
          <Select   label="انتخاب دسته بندی" />
          <Select label="انتخاب برند" />
          <FormInput name="weight" label="وزن (گرم)" />
          <FormInput name="warehouse_stock" label="موجودی انبار " />
          <MultiSelect />
          <FormInput name="product_id" label="شناسه کالا " />
          <Switch
            name="the_possibility_of_returning_goods"
            label="امکان بازگشت کالا "
          />

          <Card
            header={
              <>
                <i className=" fa fa-light fa-truck fa-flip-horizontal mx-4 text-2xl "></i>{" "}
                <span className="text-base font-semibold">
                  تنظیمات حمل و نقل
                </span>
              </>
            }
            body={
              <>
                <Switch
                  name="free_shipping"
                  label="حمل و نقل رایگان "
                  className="flex justify-between"
                />
                <Switch
                  checked={fixed_fare}
                  onChange={(e) => setFixed_fare(e.target.checked)}
                  name="fixed_fare"
                  label="کرایه ثابت "
                  className="flex justify-between"
                />
                <FormInput
                  disabled={fixed_fare}
                  name="transport_cost"
                  label="هزینه حمل و نقل "
                />
              </>
            }
          />

          <Card
            header={
              <span className="text-base font-semibold">
                اخطار کم بودن موجودی
              </span>
            }
            body={<FormInput isRow name="number" label="تعداد" />}
          />
          <Card
            header={<FormInput isRow name="video_link" label="لینک ویدیو " />}
            body={
              <>
                <p className="text-base font-semibold text-[#949494]">
                  لینک یوتیوب یا ویمو.آپارات و یا انواع پرونده های خاص مانند MP4
                  ، WebM ، ogv را وارد کنید.
                </p>
                <div className=" flex justify-end mt-9 mb-4 ">
                <button  className="btn btn-outline-success  ml-4">
                    آپلود ویدیو
                  </button>
                 
                  <button className="btn btn-danger">انتخاب ویدیو</button>
                
                </div>
              </>
            }
          />
          <Card
            header={<span className="text-base font-semibold">متا</span>}
            body={
              <>
                <FormInput name="meta_title" label="عنوان متا" />
                <FormTextarea label="توضیحات متا" />
              </>
            }
          />
        </div>
        <div className="mx-1"></div>
        <div className="flex-1">
          <div className="flex justify-end ">
          <button className="btn btn-danger ml-4">پش نویس </button>
          <button className="btn btn-outline-success ml-16 ">تایید و انتشار</button>
          </div>
          <Card
            header={
              <span className="text-base font-semibold ">تصاویر کالا</span>
            }
            body={
              <>
                <p className="text-xl font-semibold text-[#949494]">گالری تصاویر (اندازه تصاویر زیر 512*512 نباشد)</p>
                <img  src={plashoulder} className="w-28 mt-4 " />
               <div className="flex justify-end mb-2 ">
               <button className="btn btn-outline-success">آپلود ویدیو</button>
               </div>
              </>
            }
          />
          <Card
            header={
              <span className="text-base font-semibold">
                قیمت محصول + موجودی انبار فروشنده
              </span>
            }
            body={
              <>
                <FormInput
                  name="price"
                  label="قیمت"
                  placeholder="واحد با تومان"
                />
                <FormInput
                  name="stock"
                  label="موجودی انبار"
                  placeholder="تعداد کالا در انبار"
                />
                <FormInput
                  name="maximum_date_for_discount"
                  label="حداکثر تاریخ برای تخفیف"
                  placeholder="اعتبار تخفیف ( برنامه نویسی: باکس تقویم باز شود)"
                />
                <FormInput
                  name="discount"
                  label="تخفیف"
                  placeholder="مبلغ به عدد یا درصد"
                />
              </>
            }
          />
          <Card
            header={
              <span className="text-base font-semibold">ویژگی های کالا</span>
            }
            body={
              <>
                {" "}
                <Select options={[{label:"انتخاب رنگ",value:"color_selection",isSelected:true}]} label="ویژگی" />
                <Select options={[{label:"انتخاب ویژگی محصول ",value:"select_product_feature",isSelected:true}]} label="رنگ" />
                <Select options={[{label:"درج ویژگی ",value:"insert_feature",isSelected:true}]} label="سایر ویژگی ( اختیاری)" />
                <small className="text-sm font-normal !mb-4">
                  ویژگی های این محصول را انتخاب کنید و سپس مقادیر ورودی هر ویژگی
                  را وارد کنید
                </small>
              </>
            }
          />
        </div>
      </div>
    </form>
  );
};

export default AddNewProduct;
