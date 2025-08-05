import React, { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Nav() {
  return (
    <div className="fixed top-2 left-0 w-full z-30 bg-sky text-paper">
      <div className="max-w-[830px] mx-auto flex items-center justify-between px-5 py-2">
        <Link href="/">
          <img
            src="/images/full_logo.svg"
            alt="Eigen AI Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex space-x-4 text-base text-[#1B3D6D]">
            <Link href="https://eigenai.com">About</Link>
            <Link href="/">Blog</Link>
            <Link href="https://chat.eigenai.com/">GPT-OSS Playground</Link>
            <Link href="https://eigenai.com/contact/">Contact</Link>
          </div>
          <div className="flex space-x-2">
            <a href="mailto:hello@eigenai.com" target="_blank" rel="noopener noreferrer" className="text-custom-icon">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/company/eigen-ai-labs/" target="_blank" rel="noopener noreferrer" className="text-custom-icon">
              <FaLinkedin />
            </a>
            <a href="https://x.com/Eigen_AI_Labs" target="_blank" rel="noopener noreferrer" className="text-custom-icon">
              <FaXTwitter />
            </a>
            <a href="https://github.com/eigen-ai-labs" target="_blank" rel="noopener noreferrer" className="text-custom-icon">
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="md:hidden">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}

function Hamburger() {
  const [isOpen, setOpen] = useState(false);
  var style = {
    bmBurgerButton: {
      position: "fixed",
      width: "1.2em",
      height: "1.0em",
      right: "1.2rem",
      top: "1em",
    },
    bmBurgerBars: {
      background: "#fff",
    },
    bmBurgerBarsHover: {
      background: "#fff",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#fff",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0px",
    },
    bmMenu: {
      background: "#1D374E",
      padding: "2.5em 1.5em 0",
    },
    bmMorphShape: {
      fill: "#fff",
    },
    bmItemList: {
      color: "#fff",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
      position: "fixed",
      top: "0px",
      left: "0px",
    },
  };

  return (
    <Menu
      right
      styles={style}
      isOpen={isOpen}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div>
        <div
          className="child:pb-2 child:child:text-2xl"
          onClick={() => {
            setOpen(false);
          }}
        >
          <p>
            <Link href="https://eigenai.com">About</Link>
          </p>
          <p>
            <Link href="/">Blog</Link>
          </p>
          <p>
            <Link href="https://chat.eigenai.com/">GPT-OSS Chatbot</Link>
          </p>
          <p>
            <Link href="https://eigenai.com/contact">Contact</Link>
          </p>
        </div>
        <div className="child:mr-3 pt-4 child:w-8 child:brightness-100 hover:child:brightness-90 child:transition flex">
          <a href="mailto:hello@eigenai.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/company/eigen-ai-labs/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://x.com/Eigen_AI_Labs" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://github.com/eigen-ai-labs" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </Menu>
  );
}
