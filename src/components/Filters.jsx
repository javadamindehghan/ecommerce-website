import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "all",
    "shoes",
    "slippers",
    "heels",
    "t-shirts",
    "jackets",
    "caps",
    "shorts",
    "sweaters",
    "sneakers",
    "shirts",
    "boots",
    "overshirts",
    "pants",
    "jeans",
    "socks",
    "belts",
    "trainers",
  ]);
  const [selectBrandList, setSelectBrandList] = useState([
    "all",
    "WALK LONDON",
    "Reebok",
    "Nike",
    "Jack & Jones",
    "Crocs",
    "Vans",
    "Puma",
    "New Balance",
    "Tommy Jeans",
    "Tommy Hilfiger",
    "Bershka",
    "New Look",
    "AllSaints",
    "Columbia",
    "The North Face",
    "Collusion",
    "ASOS DESIGN",
    "Topman",
    "Dr Denim",
    "Polo Ralph Lauren",
    "ASOS Dark Future",
    "Levi's",
    "Threadbare",
    "Calvin Klein",
    "AAPE BY A BATHING APE®",
    "Good For Nothing",
    "Timberland",
    "Pull and Bear",
    "Koi Footwear",
    "adidas performance",
    "Nike Running",
    "Dr Martens",
    "River Island",
  ]);

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput
        type="جست وجو"
        label="محصولت"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="دسته بندی"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="برند"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      
      {/* Producer */}
      <FormSelect
        label="جنسیت"
        name="gender"
        list={["all", "male", "female"]}
        size="select-sm"
        defaultValue="all"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="select قیمت"
        size="range-sm"
        price={2000}
      />
      {/* Date Picker */}
   

      {/* In stock */}
      <FormCheckbox
        label="فقط محصولات موجود"
        name="stock"
        defaultValue="false"
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn bg-blue-600 hover:bg-blue-500 text-white btn-sm"
      >
        جست وجو
      </button>
      
    </Form>
  );
};

export default Filters;
