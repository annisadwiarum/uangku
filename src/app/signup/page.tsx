 
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
  //   const {
  //     register,
  //     handleSubmit,
  //     control,
  //     formState: { errors },
  //   } = useForm();

  //   const signUp = async (data: Record<any, string>) => {
  //     try {
  //       const resp = await axios.post("/auth/signup", data);
  //       console.log("response:", resp);
  //     } catch (error) {
  //       console.error("Terjadi error:", error);
  //     }
  //   };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      {/* <form
        onSubmit={handleSubmit(signUp)}
        className="flex flex-col gap-5 bg-white w-lg py-10 px-14 rounded-xl shadow-lg border"
      >
        <h1 className=" text-center font-semibold text-2xl mb-5">Sign Up</h1>
        <Input
          type="email"
          placeholder="Email"
          {...register("email", { required: "Email wajib diisi" })}
        />
        <Input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password wajib diisi" })}
        />
        <Button
          variant="secondary"
          className="bg-gray-200 shadow-sm"
          type="submit"
        >
          Sign Up
        </Button>
      </form> */}
      <form action="/auth/signup" method="post">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
        <button>sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
