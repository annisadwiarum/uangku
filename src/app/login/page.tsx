/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import React, { useState } from "react";

interface dataUser {
  email: string;
  password: string;
}

function Login() {
  const [data, setData] = useState<dataUser>({
    email: "",
    password: "",
  });

  const login = async () => {
    try {
      const { data: dataUser, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      });

      if (data) console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="flex flex-col gap-5 bg-white w-lg py-10 px-14 rounded-xl shadow-lg border">
        <h1 className=" text-center font-semibold text-2xl mb-5">Login Page</h1>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={data?.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={data?.password}
          onChange={handleChange}
        />
        <Button
          variant="secondary"
          className="bg-gray-200 shadow-sm"
          onClick={login}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
