import React from "react";
import { Logo } from "./logo";
import { Button } from "../ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="px-4 py-2 shadow-sm sticky top-0 border-b flex items-center justify-between">
      <Logo />
      <div className="flex gap-4 capitalize">
        <Button asChild size="sm" variant="outline">
          <Link href="/sign-in">login</Link>
        </Button>
        <Button asChild size="sm">
          <Link href="/sign-up">get taskify for free</Link>
        </Button>
      </div>
    </nav>
  );
};
