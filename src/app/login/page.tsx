/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Auth } from "@/types/auth";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [user, setUser] = useState<Auth>({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const login = async () => {
    try {
    } catch (error) {
      console.error("Terjadi error:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUser((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <form onSubmit={handleSubmit(login)} className="flex flex-col gap-5 bg-white w-lg py-10 px-14 rounded-xl shadow-lg border">
        <h1 className=" text-center font-semibold text-2xl mb-5">Login</h1>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={user?.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={user?.password}
          onChange={handleChange}
        />
        <Button
          variant="secondary"
          className="bg-gray-200 shadow-sm"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default Login;
