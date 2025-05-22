import React from "react";
import { Separator } from "../../../../components/ui/separator";

// Company contact information data
const companyInfo = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 21h18M3 7v14M21 7v14M5 21V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v16M9 21v-4h6v4" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Eucalyptus Japan",
    alt: "Office building tall",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 11a2 2 0 100-4 2 2 0 000 4zM16 17a4 4 0 00-8 0" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Tim Doyle",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "1-chōme-4-5 Roppongi, Minato City, Tokyo",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 6l-10 7L2 6" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "contact@myjuniper.jp",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "050-1808-6832",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" stroke="#FDFCF4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "Support Hours: Weekdays　9:00-18:00",
  },
];

// Footer links data
const footerLinks = [
  { text: "Privacy Policy", href: "https://www.myjuniper.jp/privacy" },
  {
    text: "Act on Specified Commercial Transactions",
    href: "https://www.myjuniper.jp/law",
  },
  { text: "Terms of Use", href: "https://www.myjuniper.jp/terms" },
  { text: "Contact us", href: "https://www.myjuniper.jp/contact-us" },
];

// Social media icons data
const socialIcons = [
  {
    src: "https://c.animaapp.com/mayvnfyjH5O03h/img/group.png",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/mayvnfyjH5O03h/img/social-media-facebook-1.svg",
    alt: "Facebook",
  },
  {
    src: "https://c.animaapp.com/mayvnfyjH5O03h/img/group-1.png",
    alt: "LinkedIn",
  },
  {
    src: "https://c.animaapp.com/mayvnfyjH5O03h/img/group-2.png",
    alt: "YouTube",
  },
  {
    src: "https://c.animaapp.com/mayvnfyjH5O03h/img/x-logo-twitter.svg",
    alt: "Twitter",
  },
  {
    src: "https://c.animaapp.com/mayvnfyjH5O03h/img/tiktok-2.svg",
    alt: "TikTok",
  },
];

export const FooterSection = () => {
  return (
    <footer className="flex flex-col items-start gap-6 px-6 py-10 md:px-[118px] md:py-[41px] bg-[#133f26] w-full">
      {/* Logo */}
      <div className="relative h-[46.9px]">
        <div className="relative h-[46px]">
          <img
            className="w-[138px] h-10"
            alt="Logo"
            src="https://c.animaapp.com/mayvnfyjH5O03h/img/logo-1.svg"
          />
          <div className="absolute w-[46px] h-3.5 top-8 left-[92px] [font-family:'Karla',Helvetica] font-normal text-[#fdfcf4] text-[8px] tracking-[0] leading-3 whitespace-nowrap">
            ジュニパー
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-[153px] w-full">
        {/* Company information */}
        <div className="flex flex-col w-full md:w-[381px] items-start gap-[15px]">
          {companyInfo.map((item, index) => (
            <div key={index} className="inline-flex items-start gap-2">
              {item.icon}
              <div className="mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-light text-[#fdf4eb] text-base tracking-[-0.32px] leading-[20.8px]">
                {item.text}
              </div>
            </div>
          ))}
        </div>

        {/* Links section */}
        <div className="flex flex-col w-full md:w-[253px] items-start gap-[13px]">
          <div className="flex flex-col items-end gap-[7px] w-full">
            <h3 className="self-stretch h-6 mt-[-1.00px] [font-family:'Noto_Sans_JP',Helvetica] font-bold text-[#fdfcf4] text-lg tracking-[0] leading-[normal]">
              Overview
            </h3>
            <Separator className="bg-[#fdfcf4]/20 h-px w-full" />
          </div>

          {footerLinks.map((link, index) => (
            <a
              key={index}
              className="[font-family:'Noto_Sans_JP',Helvetica] font-medium text-[#fdfcf4] text-base tracking-[0] leading-[normal]"
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.text}
            </a>
          ))}
        </div>

        {/* Certification logos */}
        <div className="flex flex-wrap w-full md:w-[209px] items-start justify-center gap-[15px_23px]">
          <img
            className="w-[100px] h-[86px] object-cover"
            alt="Legitscript seal"
            src="https://c.animaapp.com/mayvnfyjH5O03h/img/legitscript-seal-1.png"
          />
          <img
            className="w-[86px] h-[86px] object-cover"
            alt="Jmi logo"
            src="https://c.animaapp.com/mayvnfyjH5O03h/img/jmi-logo-1.png"
          />
          <img
            className="w-[188px] h-10"
            alt="Logo"
            src="https://c.animaapp.com/mayvnfyjH5O03h/img/logo-2.svg"
          />
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-[230px] w-full">
        {/* Social media icons */}
        <div className="flex items-center gap-1.5">
          {socialIcons.map((icon, index) => (
            <img
              key={index}
              className="w-[23px] h-[23px]"
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>

        {/* Copyright section */}
        <div className="flex flex-col w-full md:w-[406px] items-center gap-[15px]">
          <img
            className="w-[85px] h-[93px]"
            alt="Archways"
            src="https://c.animaapp.com/mayvnfyjH5O03h/img/archways.svg"
          />
          <p className="text-center [font-family:'Noto_Sans_JP',Helvetica] font-normal text-[#fdfcf4] text-sm">
            Copyright © 2023 Eucalyptus Japan K.K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
