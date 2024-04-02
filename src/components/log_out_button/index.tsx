"use client";

import { signOut } from "next-auth/react";

const LogOutButton = () => {
  const handleLogOut = async () => {
    signOut();
  };
  return <button onClick={handleLogOut}>Logout</button>;
};

export default LogOutButton;
