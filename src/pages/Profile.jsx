import React, { useEffect, useState } from "react";
import { SectionTitle } from "../components";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { db } from "../db";

const Profile = () => {
 
  async function getDataFromTable(tableName, conditions) {
    try {
      const data = await db[tableName].filter(item=>item.id==conditions).toArray();
     return data[0]
    } catch (err) {
      throw err;
    }
  }
  
  const [id, setId] = useState(localStorage.getItem("id"));
  const [userData, setUserData] = useState({});
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const wishItems = useSelector((state) => state.wishlist.wishItems);
  const [userFormData, setUserFormData] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
  });
  const navigate = useNavigate();
 
  const conditions = { id }
  const getUserData = async () => {
    
    try {
      const data = await getDataFromTable('friends',conditions.id )
     
     
      setUserFormData({
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        adress: data.adress,
        password: data.password,
      });
    } catch (error) {
      toast.error("Error: ", error.response);
    }
  };

  useEffect(() => {
    if (loginState) {
      getUserData();
    } else {
      toast.error("You must be logged in to access this page");
      navigate("/");
    }
  }, []);

  // const updateProfile = async (e) => {
  //   e.preventDefault();
  //   try{

  //     const getResponse = await axios(`http://localhost:8080/user/${id}`);
  //     const userObj = getResponse.data;

  //     // saljemo get(default) request
  //     const putResponse = await axios.put(`http://localhost:8080/user/${id}`, {
  //       id: id,
  //       name: userFormData.name,
  //       lastname: userFormData.lastname,
  //       email: userFormData.email,
  //       phone: userFormData.phone,
  //       adress: userFormData.adress,
  //       password: userFormData.password,
  //       userWishlist: await userObj.userWishlist
  //       //userWishlist treba da stoji ovde kako bi sacuvao stanje liste zelja
  //     });
  //     const putData = putResponse.data;
  //   }catch(error){
  //     console.log(error.response);
  //   }
  // }

  return (
    <>
      <SectionTitle title="پروفایل کاربر" path="خانه | پروفایل" />
      <form className="max-w-7xl mx-auto text-center px-10">
        <div className="grid grid-cols-3 max-lg:grid-cols-1">
          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">نام</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.name}
              onChange={(e) => {setUserFormData({...userFormData, name: e.target.value})}}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">نام خانوادگی</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.lastname}
              onChange={(e) => {setUserFormData({...userFormData, lastname: e.target.value})}}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">ایمبل</span>
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.email}
              onChange={(e) => {setUserFormData({...userFormData, email: e.target.value})}}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">تلفن</span>
            </label>
            <input
              type="tel"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.phone}
              onChange={(e) => {setUserFormData({...userFormData, phone: e.target.value})}}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">آدرس</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.adress}
              onChange={(e) => {setUserFormData({...userFormData, adress: e.target.value})}}
            />
          </div>

          <div className="form-control w-full lg:max-w-xs">
            <label className="label">
              <span className="label-text">پسورد</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full lg:max-w-xs"
              value={userFormData.password}
              onChange={(e) => {setUserFormData({...userFormData, password: e.target.value})}}
            />
          </div>
        </div>
        <button
          className="btn btn-lg bg-blue-600 hover:bg-blue-500 text-white mt-10"
          type="submit"
        >
          ذخیره تغییرات
        </button>
      </form>
    </>
  );
};

export default Profile;
