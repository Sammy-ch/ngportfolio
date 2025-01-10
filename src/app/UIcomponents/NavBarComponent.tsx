"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@nextui-org/button";
import { IconBrandGithub } from '@tabler/icons-react';
import {Chip} from "@nextui-org/chip";
import {
  Sheet,
  SheetContent,
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
    <div className='sm:bg-[#1B1B1B] sm:bg-none flex px-5 lg:px-10 py-5 items-center justify-between w-full gap-5 mb-5 lg:mt-10 mt-0 sticky rounded-2xl'>
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

            <div className='flex items-center gap-5'>
        <span className='bg-slate-800 h-5 w-[1px] lg:flex hidden'></span>
        <div className='flex items-center gap-5 lg:hidden'>
        <a href="https://x.com/santansaint_" target="_blank" rel="noopener noreferrer">
            <NewTwitterIcon />
          </a>
          <a href="https://www.linkedin.com/in/alain-cherubin-192a51266/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
          </a>
          <a href={`mailto:${email}`} className="py-2">
          <Mail01Icon />
          </a>

          <a href="https://github.com/Sammy-ch" target="_blank" rel="noopener noreferrer">
          <IconBrandGithub />
          </a>
        </div>
      </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default NavBarComponent;


const NewTwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffff"} fill={"none"} {...props}>
    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffff"} fill={"none"} {...props}>
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);


const Mail01Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffff"} fill={"none"} {...props}>
    <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);
