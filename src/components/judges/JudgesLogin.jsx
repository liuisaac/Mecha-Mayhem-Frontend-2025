"use client"

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export function JudgesForm({isLogin}) {
  const router = useRouter();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signup, login, currentUser } = useContext(AuthContext);
  console.log(currentUser);

  // if user has logged in, redirect to judges portal
  if (currentUser) {
    router.push("/judges/authenticated");
  }
  
  const onSubmit = async (data, isLogin) => {
    if (isLogin) {
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
    } else {
      // signup(data.email, data.password)
      // .then((userCredential) => {
      //   // Signed up 
      //   const user = userCredential.user;
      //   console.log(user);
      //   // ...
      // }).catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   console.log(errorCode);
      //   console.log(errorMessage);
      //   setError(errorMessage);
      //   // ..
      // });
    }
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

  const confirmPasswordValidation = {
    validate: value => value === watch("password") || "The passwords do not match"
  };

  console.log(watch("email")) // watch input value by passing the name of it
  console.log(watch("password")) // watch input value by passing the name of it


  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  if (isLogin) {
    return (
      <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">   
          <form className="flex flex-col items-center justify-center w-[30%] h-[80%] bg-black" onSubmit={handleSubmit(data => onSubmit(data, isLogin))}>
              <div className="flex flex-col w-[65%] h-full">
                  <div className="flex flex-col items-center justify-center h-[40%]">
                      <div className="font-saira flex items-end justify-center text-3xl h-[50%]">Judges Portal Login</div>
                      <div className="flex items-center justify-center h-[50%]">
                        {error && <small className="text-danger text-red-500">{error}</small>}
                      </div>
                  </div>
                  <div className="flex flex-col items-center justify-start h-[25%] gap-y-4">
                      {/* register your input into the hook by invoking the "register" function */}
                      <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="email" {...register("email", emailValidation)} />
                      {/* errors will return when field validation fails  */}
                      {errors.email && (<small className="text-danger text-red-500">{errors.email.message}</small>)}
  
                      {/* include validation with required or other standard HTML validation rules */}
                      <input type="password" autocomplate="off" className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="password" {...register("password", passwordValidation)} />
                      {errors.password && (<small className="text-danger text-red-500">{errors.password.message}</small>)}
                  </div>
  
                  <div className="flex flex-row items-start justify-center gap-x-3 pt-10">
                    <Button type="submit" sx={{backgroundColor: "white", color: "black", fontFamily: "font-saira"}}>Submit</Button>
                    {/* <Button sx={{backgroundColor: "white", color: "black", fontFamily: "font-saira"}} onClick={() => router.push("/judges/createAccount")}>Create An Account</Button> */}
                  </div>
              </div>
          </form>
      </div>
    ) 
  } 

  // return (
  //   <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">   
  //       <form className="flex flex-col items-center justify-center w-[30%] h-[80%] bg-black" onSubmit={handleSubmit(data => onSubmit(data, isLogin))}>
  //           <div className="flex flex-col w-[95%] h-full">
  //                 <div className="flex flex-col items-center justify-center h-[40%]">
  //                     <div className="font-saira flex items-end justify-center text-3xl h-[50%]">Create Judges Portal Account</div>
  //                     <div className="flex items-center justify-center h-[50%]">
  //                       {/* need to fix styling of this error */}
  //                       {error && <small className="text-danger text-red-500">{error}</small>}
  //                     </div>
  //                 </div>
  //               <div className="flex flex-col items-center justify-start h-[25%] gap-y-4 ml-10 mr-10">
  //                   {/* register your input into the hook by invoking the "register" function */}
  //                   <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="email" {...register("email", emailValidation)} />
  //                   {errors.email && (<small className="text-danger text-red-500">{errors.email.message}</small>)}

  //                   {/* include validation with required or other standard HTML validation rules */}
  //                   <input type="password" autocomplate="off" className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="password" {...register("password", passwordValidation)} />
  //                   {errors.password && (<small className="text-danger text-red-500">{errors.password.message}</small>)}

  //                   <input type="password" autocomplate="off" className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="confirm password" {...register("confirmPassword", confirmPasswordValidation)} />
  //                   {errors.confirmPassword && (<small className="text-danger text-red-500">{errors.confirmPassword.message}</small>)}
  //               </div>

  //               <div className="flex flex-row items-start justify-center gap-x-3 pt-11 mt-24">
  //                 <Button type="submit" sx={{backgroundColor: "white", color: "black", fontFamily: "font-saira"}}>Create Account</Button>
  //                 <Button sx={{backgroundColor: "white", color: "black", fontFamily: "font-saira"}} onClick={() => router.push("/judges/login")}>Login</Button>
  //               </div>
  //           </div>
  //       </form>
  //   </div>
  // )
}