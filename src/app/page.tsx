import Image from "next/image";
import HeaderComponent from "./UIcomponents/HeaderComponent";
import HeroComponent from "./UIcomponents/HeroComponent";
import ProjectsComponent from "./UIcomponents/ProjectsComponent";
import ServicesComponent from "./UIcomponents/ServicesComponent";
import TestimonialsComponent from "./UIcomponents/TestimonialsComponent";
import CTAComponent from "./UIcomponents/CTAComponent";
import FooterComponent from "./UIcomponents/FooterComponent";
import NavBarComponent from "./UIcomponents/NavBarComponent";
export default function Home() {
  return (
    <main className="min-h-screen wrapper">
      <NavBarComponent/>
      <HeaderComponent />
      <HeroComponent  />
      <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <BriefcaseIcon />
          <h3>Latest Work</h3>
      </div>
        <span className='text-md text-gray-500'>Some of the recent software products i have built </span>
      </div>
      <ProjectsComponent />
      <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <CardExchangeIcon />
          <h3>Services I Offer</h3>
      </div>
        <span className='text-md text-gray-500'>Let us work together on your next successfull product </span>
      </div>
      <ServicesComponent />
      <div className='flex flex-col gap-2'>
      <div className='flex gap-2'>
        <FavouriteIcon />
          <h3>Happy Clients</h3>
      </div>
        <span className='text-md text-gray-500'>Words from clients i have worked with </span>
      </div>
      <TestimonialsComponent />
      <CTAComponent />
      <FooterComponent/>
    </main>
  );
}



const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffff"} fill={"none"} {...props}>
    <path d="M3 10V17.9861C3 19.9268 4.79086 21.5 7 21.5H17C19.2091 21.5 21 19.9268 21 17.9861V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19.0571 3.5C19.5618 3.5 19.8141 3.5 20.0228 3.55014C20.7343 3.7211 21.29 4.30597 21.4524 5.05496C21.5 5.27465 21.5 5.54025 21.5 6.07143C21.5 7.39939 21.5 8.06336 21.3809 8.6126C20.9749 10.4851 19.5858 11.9473 17.807 12.3746C17.2852 12.5 16.6544 12.5 15.3929 12.5H8.60714C7.34558 12.5 6.7148 12.5 6.19303 12.3746C4.41417 11.9473 3.0251 10.4851 2.61909 8.6126C2.5 8.06336 2.5 7.39939 2.5 6.07143C2.5 5.54025 2.5 5.27465 2.54764 5.05496C2.71004 4.30597 3.26567 3.7211 3.97721 3.55014C4.18592 3.5 4.43823 3.5 4.94286 3.5M9.15 3.5H14.85" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 4C5 3.53406 5 3.30109 5.07612 3.11732C5.17761 2.87229 5.37229 2.67761 5.61732 2.57612C5.80109 2.5 6.03406 2.5 6.5 2.5H7.5C7.96594 2.5 8.19891 2.5 8.38268 2.57612C8.62771 2.67761 8.82239 2.87229 8.92388 3.11732C9 3.30109 9 3.53406 9 4C9 4.46594 9 4.69891 8.92388 4.88268C8.82239 5.12771 8.62771 5.32239 8.38268 5.42388C8.19891 5.5 7.96594 5.5 7.5 5.5H6.5C6.03406 5.5 5.80109 5.5 5.61732 5.42388C5.37229 5.32239 5.17761 5.12771 5.07612 4.88268C5 4.69891 5 4.46594 5 4Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M15 4C15 3.53406 15 3.30109 15.0761 3.11732C15.1776 2.87229 15.3723 2.67761 15.6173 2.57612C15.8011 2.5 16.0341 2.5 16.5 2.5H17.5C17.9659 2.5 18.1989 2.5 18.3827 2.57612C18.6277 2.67761 18.8224 2.87229 18.9239 3.11732C19 3.30109 19 3.53406 19 4C19 4.46594 19 4.69891 18.9239 4.88268C18.8224 5.12771 18.6277 5.32239 18.3827 5.42388C18.1989 5.5 17.9659 5.5 17.5 5.5H16.5C16.0341 5.5 15.8011 5.5 15.6173 5.42388C15.3723 5.32239 15.1776 5.12771 15.0761 4.88268C15 4.69891 15 4.46594 15 4Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 18H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const CardExchangeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffff"} fill={"none"} {...props}>
    <path d="M22 14.0059C22 17.3207 19.3171 20.0018 16 20.0018L16.8571 18.2887" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 10.0087C2 6.69376 4.68286 4.0127 8 4.0127L7.14286 5.72584" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.9658 5.52418H21.7723M13.4658 10.9944H19.4999C20.8806 10.9944 21.9999 9.87585 21.9999 8.49607V4.49686C21.9999 3.11707 20.8806 1.99854 19.4999 1.99854H13.4658C12.0851 1.99854 10.9658 3.11707 10.9658 4.49686V8.49607C10.9658 9.87585 12.0851 10.9944 13.4658 10.9944Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 16.5315H12.8065M4.5 22.0017H10.5341C11.9148 22.0017 13.0341 20.8832 13.0341 19.5034V15.5042C13.0341 14.1244 11.9148 13.0059 10.5341 13.0059H4.5C3.11929 13.0059 2 14.1244 2 15.5042V19.5034C2 20.8832 3.11929 22.0017 4.5 22.0017Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const FavouriteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffff"} fill={"none"} {...props}>
    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);
