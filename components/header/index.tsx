import { Medal } from "lucide-react";
import React from "react";

export const Jumbotron = () => {
  return (
    <div className="flex gap-2 rounded shadow-sm uppercase  bg-amber-100 text-amber-700">
      <Medal className="w-6 h-6" />
      <h3>no 1 task managment</h3>
    </div>
  );
};
