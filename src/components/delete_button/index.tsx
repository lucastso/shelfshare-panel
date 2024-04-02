"use client";

import { api } from "@/lib/axios";

const DeleteButton = ({ id, type }: { id: number; type: string }) => {
  const handleDelete = (id: number, type: string) => {
    api.delete(`/${type}/${id}`);
  };

  return <button onClick={() => handleDelete(id, type)}>delete</button>;
};

export default DeleteButton;
