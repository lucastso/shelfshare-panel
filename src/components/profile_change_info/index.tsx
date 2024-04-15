"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

const ProfileChangeInfo = async ({
  image,
  name,
  email,
}: {
  image: string;
  name: string;
  email: string;
}) => {
  const [formData, setFormData] = useState({
    image: image,
    name: name,
    email: email,
    password: "",
  });

  const [formValid, setFormValid] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    const isFormValid = Object.values({
      ...formData,
      [name]: value,
    }).every((field) => {
      if (typeof field === "string") {
        return field.trim() !== "";
      }
      return false;
    });

    setFormValid(isFormValid);
  };

  return (
    <div className="space-y-8">
      <div className="flex gap-4 items-center">
        <Image
          src={image as string}
          alt=""
          width={512}
          height={256}
          className="w-14 rounded-full"
        />
        <span className="h-fit px-3 py-2 rounded-md text-zinc-600 bg-zinc-950 border border-zinc-800 w-fit flex items-center gap-2 cursor-pointer text-sm">
          Edit
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your best e-mail"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Your password"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <button className="bg-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center cursor-pointer gap-2 relative">
        Send
      </button>
    </div>
  );
};

export default ProfileChangeInfo;
