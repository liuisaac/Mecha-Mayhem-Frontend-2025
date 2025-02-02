"use client"

import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import Banner from "/src/components/judges/Banner";

export function JudgesForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { login, currentUser } = useContext(AuthContext);
  console.log(currentUser);

  useEffect(() => {
    // if user has logged in, redirect to judges portal
    if (currentUser) {
      router.push("/judges/authenticated");
    }
}, [currentUser]);
  
  const onSubmit = async (data) => {
    login(data.email, data.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      setError(errorMessage);
    }) 
  };

  // Form Validation
  const emailValidation = {
    required: "An Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid Email Address"
    }
  };

  const passwordValidation = {
    required: "A Password is required",
    minLength: {
      value: 6,
      message: "Password must be more than 6 characters"
    },
    maxLength: {
      value: 30,
      message: "Password must be less than 30 characters"
    }
  };

  console.log(watch("email")) // watch input value by passing the name of it
  console.log(watch("password")) // watch input value by passing the name of it


  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  return (
    <div className="w-screen relative flex flex-col items-center justify-center overflow-auto bg-white font-lexend mt-16 sm:mt-20">
      <Banner title="JUDGES PORTAL LOGIN"/>
      <div className="w-screen h-[80vh] flex items-start justify-center relative overflow-auto">   
        <form className="flex flex-col items-center justify-center h-[80%]" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-start h-[25%] gap-y-4">
              {/* register your input into the hook by invoking the "register" function */}
              <input className="text-white font-lexend bg-black border-2 border-gray-300 rounded w-[40vh] md:w-[50vh] p-2 h-10" placeholder="email" {...register("email", emailValidation)} />
              {/* errors will return when field validation fails  */}
              {errors.email && (<small className="text-danger text-red-500">{errors.email.message}</small>)}

              {/* include validation with required or other standard HTML validation rules */}
              <input type="password" autocomplate="off" className="text-white font-lexend bg-black border-2 border-gray-300 rounded w-[40vh] md:w-[50vh] p-2 h-10" placeholder="password" {...register("password", passwordValidation)} />
              {errors.password && (<small className="text-danger text-red-500">{errors.password.message}</small>)}

              <div className="flex flex-row items-start justify-center gap-x-3 pt-10">
                <Button type="submit" sx={{backgroundColor: "black", color: "white", fontFamily: "font-saira"}}>Submit</Button>
              </div>
          </div>
        </form>
    </div>
    </div>
  ) 
}