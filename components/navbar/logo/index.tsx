import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="items-center gap-2 hidden md:flex hover:opacity-75 transition"
    >
      <Image
        src="/trello.svg"
        priority
        alt="trello logo"
        width={30}
        height={30}
      />
      <span className="text-lg text-neutral-700">Taskify</span>
    </Link>
  );
};
