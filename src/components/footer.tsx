import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 flex h-14 w-full flex-col items-center justify-center gap-2">
      <h3 className="text-xs sm:text-sm">© 2023 Copyright USBK777 Store</h3>
      <span className="flex items-center gap-1.5 text-xs sm:text-sm">
        Made with <Heart size={16} className="text-blue-500" /> by
        <strong>usbaliendev</strong>
      </span>
    </footer>
  );
};

export default Footer;
