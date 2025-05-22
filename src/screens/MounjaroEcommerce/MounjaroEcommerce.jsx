import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { PriceSection } from "./sections/PriceSection/PriceSection";

export const MounjaroEcommerce = () => {
  return (
    <div className="flex flex-col w-full items-start">
      <header className="flex w-full items-center justify-between px-[52px] py-[13px] bg-white border-b border-[#133f26]">
        <img
          className="w-[115px] h-[39.12px]"
          alt="Logo"
          src="https://c.animaapp.com/mayvnfyjH5O03h/img/logo.png"
        />

        <div className="flex items-center">
          <Button 
            className="h-12 px-4 py-1.5 bg-[#133f26] rounded-[5px] text-tertiarycream"
            onClick={() => window.open("https://app.myjuniper.jp/start/signup", "_blank")}
          >
            <span className="font-medium text-lg">
              Book your free doctor consult today
            </span>
          </Button>
        </div>
      </header>

      <PriceSection />
      <FooterSection />
    </div>
  );
};
