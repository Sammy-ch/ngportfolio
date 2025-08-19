import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import Link from "next/link";

interface ProjectDescriptionTypes {
  image: string;
  description: string;
  techStacks: string[];
  link: string;
}

function ProjectsComponent() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full full-bleed">
      <Carousel items={cards} />
    </div>
  );
}

export default ProjectsComponent;

const ProjectDescription = ({
  image,
  description,
  techStacks,
  link,
}: ProjectDescriptionTypes) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <Image
        src={image}
        alt="Project Image"
        className="w-full h-auto rounded-lg mb-4"
        width={500}
        height={500}
      />
      <Link passHref legacyBehavior href={link}>
        <a target="_blank" style={{ textDecoration: "underline" }}>
          Visit the website
        </a>
      </Link>
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto py-5">
        <span className=" text-neutral-700 dark:text-neutral-200">
          {description}
        </span>
      </p>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        {techStacks.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

const data = [
  {
    category: "Website",
    title: "Eden Garden Resort",
    src: "/portfolio/eden-port.png",
    content: (
      <ProjectDescription
        image="/portfolio/eden-port.png"
        link="https://www.edengardenresort.bi/"
        description=" Eden Garden Resort, enhancing online presence and simplifying the booking process. It provides potential guests with a comprehensive overview of the resort, encouraging both direct bookings and positive engagement."
        techStacks={["React", "Next.js", "Postgresql", "Redwood js"]}
      />
    ),
  },
  {
    category: "Website",
    title: "Judicium AI",
    src: "/portfolio/judiciumai.png",
    content: (
      <ProjectDescription
        image="/portfolio/judiciumai.png"
        link="https://www.judiciumai.org/"
        description="Judicium AI guides you through regulations, statutes and legal frameworks and save time. Judicium AI helps you find the relevant information quickly, backed by direct references to source documents in the burundian legal system."
        techStacks={["React", "Remix", "Tailwind CSS", "Postgresql", "Docker"]}
      />
    ),
  },
  {
    category: "Website",
    title: "Faith In Action",
    src: "/portfolio/fia.png",
    content: (
      <ProjectDescription
        image="/portfolio/fia.png"
        link="https://faithia-web.vercel.app/"
        description="Faith in Action is a non-profit organization that coaches and supports disadvantaged and at-risk women in Burundi through a holistic community and family-based approach so that they become active, contributing members of their communities."
        techStacks={["React", "Next.js", "Tailwind CSS"]}
      />
    ),
  },
  {
    category: "Website",
    title: "Wasili",
    src: "/portfolio/wasili-port.png",
    content: (
      <ProjectDescription
        image="/portfolio/wasili-port.png"
        link="https://wasili.vercel.app/"
        description="Website concept for Wasili. The website features a sleek, user-friendly interface that connects riders with drivers across diverse urban and rural areas, catering to a range of transportation needs."
        techStacks={["React", "Next.js", "Tailwind CSS"]}
      />
    ),
  },
  {
    category: "Website",
    title: "Rweru Import & Export",
    src: "/portfolio/rweru-port.png",
    content: (
      <ProjectDescription
        image="/portfolio/rweru-port.png"
        link="https://rweru-logistics.vercel.app/"
        description="Rweru website is a concept for a dynamic import-export platform designed to streamline trade operations across Africa. The website offers a comprehensive digital marketplace that connects buyers and sellers and detailed logistics tracking. With a focus on facilitating cross-border trade, Rweru provides a user-friendly interface and robust support for a variety of goods, ensuring efficient and transparent trade processes."
        techStacks={["React", "Next.js", "Tailwind CSS"]}
      />
    ),
  },
];
