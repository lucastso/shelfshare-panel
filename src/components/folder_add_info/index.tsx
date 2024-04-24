"use client";

import { api } from "@/lib/axios";
import { ChangeEvent, useState } from "react";

const FolderAddInfo = ({ userId }: { userId: string }) => {
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    creatorId: userId,
    name: "",
    collabs: `{${userId}}`,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (Object.values(formData).every((value) => value !== "")) {
      api.post("/folders", formData).then(() => {
        setError("");
      });
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <div className="space-y-8 w-full">
      <strong className="text-red-500">{error}</strong>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Folder name"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="collabs">Collabs:</label>
        <input
          type="text"
          id="collabs"
          name="collabs"
          value={formData.collabs}
          onChange={handleChange}
          placeholder="user#12345"
          className="rounded-md border border-zinc-900 bg-black px-2 py-2 focus:border-zinc-800 focus:outline-none"
        />
      </div>

      <button
        onClick={() => handleSubmit()}
        className="bg-zinc-900 text-zinc-400 text-sm px-4 py-3 rounded-md flex items-center cursor-pointer gap-2 relative"
      >
        Send
      </button>
    </div>
  );
};

export default FolderAddInfo;
