"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@nextui-org/button";

function NavBarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const emailUser = "sammystcherubin";
  const emailDomain = "gmail.com";
  const email = `${emailUser}@${emailDomain}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-[#1B1B1B] flex px-10 py-5 items-center justify-between w-full gap-5 mb-20 mt-10 sticky rounded-2xl'>
      <div className='sm:flex gap-5 hidden'>
        <Link href={"/"}>
          Home
        </Link>
        <Link href="#portfolio">
          Portfolio
        </Link>
        <Link href={"#services"}>
          Services
        </Link>
        <Link href={"#testimonials"}>
          Testimonial
        </Link>
        <Link href={"#CTA"}>
          CTA
        </Link>
      </div>

      <a href={`mailto:${email}`} className='sm:flex hidden'>
        <Button color="primary">
          Contact
        </Button>
      </a>

      <div className="sm:hidden flex items-center ml-auto">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className=" top-16 left-0 w-full bg-[#1B1B1B] flex flex-col items-center md:hidden">
          <Link href={"/"} className="py-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="#portfolio" className="py-2" onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link href={"#services"} className="py-2" onClick={toggleMenu}>
            Services
          </Link>
          <Link href={"#testimonials"} className="py-2" onClick={toggleMenu}>
            Testimonial
          </Link>
          <Link href={"#CTA"} className="py-2" onClick={toggleMenu}>
            CTA
          </Link>
          <a href={`mailto:${email}`} className="py-2">
            <Button color="primary">
              Contact
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default NavBarComponent;