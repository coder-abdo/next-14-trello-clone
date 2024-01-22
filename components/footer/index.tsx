import React from "react";
import { Logo } from "../navbar/logo";
import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-2 px-4 shadow-sm border-t bg-slate-100 sticky bottom-0">
      <Logo />
      <div className="flex gap-4 capitalize">
        <Button size="sm" variant="ghost">
          privacy policy
        </Button>
        <Button size="sm" variant="ghost">
          terms of service
        </Button>
      </div>
    </footer>
  );
};
