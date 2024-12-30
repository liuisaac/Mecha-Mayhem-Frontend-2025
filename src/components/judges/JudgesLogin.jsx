"use client"

import React, { useContext } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebaseConfig.mjs"
import { AuthContext } from "../context/AuthContext";
import { redirect } from "next/navigation";

export function JudgesForm({isLogin}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  // if user has logged in, redirect to judges portal
  if (currentUser) {
    redirect("/judges/authenticated");
  }
  
  const onSubmit = async (data, isLogin) => {
    if (isLogin) {
      signInWithEmailAndPassword(auth, data.email, data.password)
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
      }) 
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
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
              <div className="flex flex-col h-full">
                  <div className="font-saira flex items-center justify-center h-[40%] text-3xl">
                      Judges Portal Login
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
  
                  <div className="flex flex-col items-center justify-start h-[35%] gap-y-2 pt-5">
                    <button type="submit"> Submit </button>
                    <Link href="createAccount">Create An Account</Link>
                  </div>
              </div>
          </form>
      </div>
    ) 
  } 

  return (
    <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">   
        <form className="flex flex-col items-center justify-center w-[30%] h-[80%] bg-black" onSubmit={handleSubmit(data => onSubmit(data, isLogin))}>
            <div className="flex flex-col h-full">
                <div className="font-saira flex items-center justify-center h-[40%] text-3xl">
                    Create Account for Judges Portal
                </div>
                <div className="flex flex-col items-center justify-start h-[25%] gap-y-4">
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="email" {...register("email", emailValidation)} />
                    {errors.email && (<small className="text-danger text-red-500">{errors.email.message}</small>)}

                    {/* include validation with required or other standard HTML validation rules */}
                    <input type="password" autocomplate="off" className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="password" {...register("password", passwordValidation)} />
                    {errors.password && (<small className="text-danger text-red-500">{errors.password.message}</small>)}

                    <input type="password" autocomplate="off" className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="confirm password" {...register("confirmPassword", confirmPasswordValidation)} />
                    {errors.confirmPassword && (<small className="text-danger text-red-500">{errors.confirmPassword.message}</small>)}
                </div>

                <div className="flex flex-col items-center justify-start h-[35%] gap-y-2 pt-5">
                  <button type="submit"> Create Account </button>
                  <Link href="login">Sign in</Link>
                </div>
            </div>
        </form>
    </div>
  )
}