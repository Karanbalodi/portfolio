"use client";

import React from "react";
import { VscMail } from "react-icons/vsc";
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { redirect } from "next/navigation";

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
      <VscMail
        className="mr-2 text-4xl text-primary cursor-pointer"
        onClick={() => {
          window.open(
            "mailto:karanbalodi1@gmail.com?subject=Hello Karan&body=Hi Karan. I would like to connect with you"
          );
        }}
      />
      {/* <span
              className="ml-3 text-xl fill-current text-primary cursor-pointer"
              onClick={() => {
                redirect(
                  "https://drive.google.com/file/d/11okWmJiaY88_OK3uTaN8BieOYP7EggrU/view?usp=sharing"
                );
              }}
            >
              Resume
            </span> */}
    </div>
  );
};
