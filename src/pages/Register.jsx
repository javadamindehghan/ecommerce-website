import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import dbJson from '../data/db.json'
import  {db}  from "../db";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "";

    if (name.length === 0) {
      isProceed = false;
      errorMessage = "لطفا نام کاربری را وارد نمایید";
    } else if (lastname.length === 0) {
      isProceed = false;
      errorMessage = "لطفا نام خانوادگی را وارد نمایید";
    } else if (email.length === 0) {
      isProceed = false;
      errorMessage = "لطفا ایمیل رل وارد نمایید";
    } else if (phone.length < 4) {
      isProceed = false;
      errorMessage = "Phone must be longer than 3 characters";
    } else if (adress.length < 4) {
      isProceed = false;
      errorMessage = "ادرس باید از 3 کلرلکتر بیشتر باشد";
    } else if (password.length < 6) {
      isProceed = false;
      errorMessage = "پسورد از 5 کاراکتر باید بیشتر باشد";
    } else if (confirmPassword.length < 6) {
      isProceed = false;
      errorMessage = "پسورد را دوباره تکرار کنید";
    } else if (password !== confirmPassword) {
      isProceed = false;
      errorMessage = "پسورد لاید تطابق کند";
    }

    if (!isProceed) {
      toast.warn(errorMessage);
    }

    return isProceed;
  };
  async function addFriend(user) {
    try {
      // Add the new friend!
        await db.friends.add(user);
      toast.success("Registration Successful");

   
    } catch (error) {
    toast.error("Registration err")
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let regObj = {
      id: nanoid(),
      name,
      lastname,
      email,
      phone,
      adress,
      password,
      userWishlist: [],
    };

    if (isValidate()) {
      
     await addFriend(regObj)
     
      // fetch("http://localhost:8080/user", {
      //   method: "POST",
      //   headers: { "content-type": "application/json" },
      //   body: JSON.stringify(regObj),
      // })
      //   .then((res) => {
      //     toast.success("Registration Successful");
      //     navigate("/login");
      //   })
      //   .catch((err) => {
      //     toast.error("Failed: " + err.message);
      //   });
    }
  };
  return (
    <>
      <SectionTitle title="ثبت نام" path="خانه | ثبت نام" />
      <div className="flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200">
            <form className="px-5 py-7" onSubmit={handleSubmit}>
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                نام
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                نام خانوادگی
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                ایمیل
              </label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                تلفن
              </label>
              <input
                type="tel"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                آدرس
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
                پسورد
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content">
               تکرار پسورد 
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
              <button
                type="submit"
                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Register</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="py-5 text-center">
            <Link
              to="/login"
              className="btn btn-neutral text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
            ورود
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
