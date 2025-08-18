"use client";

import React from "react";
import { VscMail } from "react-icons/vsc";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { redirect } from "next/navigation";
import { PiReadCvLogoFill } from "react-icons/pi";
import { TbFileCv } from "react-icons/tb";

export const SocialNavigation = () => {
  return (
    <div className="flex items-center mt-6 sm:mt-2 sm:justify-start justify-center">
      <FaLinkedin
        className="mr-2 text-3xl text-primary cursor-pointer"
        onClick={() =>
          redirect("https://www.linkedin.com/in/karan-balodi-11840916b/")
        }
      />
      <FaGithubSquare
        className="mr-2 text-3xl text-primary cursor-pointer"
        onClick={() => redirect("https://www.github.com/karanb1/")}
      />
      <FaMedium
        className="mr-2 text-3xl text-primary cursor-pointer"
        onClick={() => redirect("https://medium.com/@karanbalodi")}
      />
      <FaSquareInstagram
        className="mr-2 text-3xl text-primary cursor-pointer"
        onClick={() => redirect("https://www.instagram.com/karanbalodi/")}
      />
      <FaSquareXTwitter
        className="mr-2 text-3xl text-primary cursor-pointer"
        onClick={() => redirect("https://twitter.com/balodikanu125")}
      />
      <TbFileCv
        className="mr-2 text-3xl text-primary cursor-pointer"
        onClick={() => {
          redirect(
            "https://drive.google.com/file/d/1XAsT0QYhCT8PRqY_sV6PyB337hQMAIRc/view?usp=sharing"
          );
        }}
      />
      <VscMail
        className="mr-2 text-4xl text-primary cursor-pointer"
        onClick={() => {
          window.open(
            "mailto:karanbalodi1@gmail.com?subject=Hello Karan&body=Hi Karan. I would like to connect with you regarding ..."
          );
        }}
      />
    </div>
  );
};
