"use client"

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import axios from "axios";

interface Login {
  username: string;
  password: string;
}

interface CreateAccount extends Login {
  confirmPassword: string;
}

export function JudgesLogin(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Login>()

  
  const onSubmit: SubmitHandler<CreateAccount> = async (data) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/judges/login`,
      {
        username: watch("username"),
        password: watch("password")
      }
    );

    console.log(res);
  };

  console.log(watch("username")) // watch input value by passing the name of it
  console.log(watch("password")) // watch input value by passing the name of it


  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

  return (
    <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">   
        <form className="flex flex-col items-center justify-center w-[30%] h-[80%] bg-black" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col h-full">
                <div className="font-saira flex items-center justify-center h-[40%] text-3xl">
                    Judges Portal Login
                </div>
                <div className="flex flex-col items-center justify-start h-[25%] gap-y-4">
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="username" {...register("username", {required: true})} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="password" {...register("password", {required: true })} />
                    {/* errors will return when field validation fails  */}
                    {(errors.username || errors.password) && <span>{errors.username ? "Username" : "Password"} is required</span>}
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

export function JudgesCreateAccount(props: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CreateAccount>()

  const onSubmit: SubmitHandler<CreateAccount> = async (data) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/judges/add`,
      {
        username: watch("username"),
        password: watch("password")
      }
    );

    console.log(res);
  };


  console.log(watch("username")) // watch input value by passing the name of it
  console.log(watch("password")) // watch input value by passing the name of it
  console.log(watch("confirmPassword")) // watch input value by passing the name of it


  /* "handleSubmit" will validate your inputs before invoking "onSubmit" */

  return (
    <div className="w-screen h-screen flex items-center justify-center mt-10 relative overflow-auto">   
        <form className="flex flex-col items-center justify-center w-[30%] h-[80%] bg-black" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col h-full">
                <div className="font-saira flex items-center justify-center h-[40%] text-3xl">
                    Create Account for Judges Portal
                </div>
                <div className="flex flex-col items-center justify-start h-[25%] gap-y-4">
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="username" {...register("username", {required: true})} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="password" {...register("password", {required: true })} />

                    <input className="text-black border-2 border-gray-300 rounded w-[100%] p-2 h-10" placeholder="confirm password" {...register("confirmPassword", {required: true, validate: (value) => {
                      if (value !== watch("password")) return "Your passwords do not match"
                    }})} />
                    {/* errors will return when field validation fails  */}
                    {(errors.username || errors.password) && <span>{errors.username ? "Username" : "Password"} is required</span>}
                </div>

                <div className="flex flex-col items-center justify-start h-[35%] gap-y-2 pt-5">
                  <button type="submit"> Create Account </button>
                </div>
            </div>
        </form>
    </div>
  )
}