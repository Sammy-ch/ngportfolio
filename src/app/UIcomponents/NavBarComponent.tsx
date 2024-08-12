"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@nextui-org/button";
import { motion } from 'framer-motion';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
function NavBarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const emailUser = "sammystcherubin";
  const emailDomain = "gmail.com";
  const email = `${emailUser}@${emailDomain}`;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='sm:bg-[#1B1B1B] sm:bg-none flex px-0 lg:px-10 py-5 items-center justify-between w-full gap-5 mb-5 lg:mt-10 mt-0 sticky rounded-2xl'>
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
        <Sheet open={isMenuOpen} onOpenChange={toggleMenu}>
          <SheetTrigger asChild>
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1B1B1B] flex flex-col border-none text-white">
            <Link href={"/"} className="py-2 text-xl" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="#portfolio" className="py-2 text-xl" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link href={"#services"} className="py-2 text-xl" onClick={toggleMenu}>
              Services
            </Link>
            <Link href={"#testimonials"} className="py-2 text-xl" onClick={toggleMenu}>
              Testimonial
            </Link>
            <Link href={"#CTA"} className="py-2 text-xl" onClick={toggleMenu}>
              CTA
            </Link>
            <a href={`mailto:${email}`} className="py-2">
              <Button color="primary">
                Contact
              </Button>
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default NavBarComponent;