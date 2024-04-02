"use client";

import { ChangeEvent, useState } from "react";
import { api } from "@/lib/axios";

const AddFolderButton = () => {
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    creator_id: "1",
    collabs_id: ["1"],
    name: "Folder 1",
  });

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

  const handleAddFolderButton = () => {
    api.post("/folder", formData);
  };

  return <button>Add folder</button>;
};

export default AddFolderButton;
