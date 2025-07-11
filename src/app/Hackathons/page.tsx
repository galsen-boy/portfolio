// src/app/Hackathons.tsx

"use client";
 
import React from "react";
import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import FallingText from "@/blocks/TextAnimations/FallingText/FallingText";
import Threads from "@/blocks/Backgrounds/Threads/Threads";
import HackathonEntry from "./HackathonEntry";

const handleAnimationComplete = () => {
  console.log('Hackathon page animation completed!');
};

// Define your hackathon entry data
const hackathonEntriesData = [
  {
    entryNumber: "01",
    title: "Rio Digital Show",
    award: "1st Place",
    description: "LocaLink est une plateforme web développée lors d’un hackathon, conçue pour faciliter la location de biens et services entre particuliers à l’échelle locale. L’objectif est de promouvoir une économie circulaire, pratique et économique, en connectant des utilisateurs situés à proximité immédiate.",
    imageSrc: '/solutions/localink.png', // Replace with the actual image path
    projectLink: "https://www.linkedin.com/company/rio-digital-show/", // <-- Add the link for Procrash
    trophyType: "first", // Specify the trophy type
    techStackIcons: [ // <-- Add paths to tech stack icons for Procrash
        '/techstack/flutterflow.svg',
        '/techstack/gemini.svg',
        '/techstack/go-svgrepo-com.svg',
        '/techstack/css.svg',
        '/techstack/html-5-svgrepo-com.svg',
    ],
  },
  {
    entryNumber: "02",
    title: "SocialConnect",
    award: "3rd Place",
    description: "Réseau social minimaliste développé en Go, permettant aux utilisateurs de s'inscrire, publier du contenu, interagir via des commentaires et gérer leur profil. Le projet met l'accent sur la sécurité des données et l’authentification.",
    imageSrc: '/solutions/socialnetwork.png',
    projectLink: "https://github.com/galsen-boy/social-network",
    trophyType: "third",
    techStackIcons: [
      '/techstack/go-svgrepo-com.svg',
      '/techstack/sqlite-svgrepo-com.svg',
      '/techstack/html-5-svgrepo-com.svg',
      '/techstack/css.svg',
    ],
  }
  ,
  {
    entryNumber: "03",
    title: "GraphQL Hub",
    award: "Hack Sprint API Award",
    description: "API GraphQL complète pour gérer les utilisateurs et leurs publications avec typage fort et requêtes optimisées. Un projet back-end démontrant l'usage efficace de schémas, résolveurs et authentification sécurisée.",
    imageSrc: '/solutions/graphql.png',
    projectLink: "https://github.com/galsen-boy/graphql",
    trophyType: "special",
    techStackIcons: [
      '/techstack/graphql-svgrepo-com.svg',
      '/techstack/node-js-svgrepo-com.svg',
      '/techstack/css.svg',
      '/techstack/html-5-svgrepo-com.svg',
    ],
  }
  ,
  {
    entryNumber: "04",
    title: "Groupie Tracker",
    award: "Finalist - 1st Place Mock Pitch",
    description: "Application web interactive qui cartographie les tournées de groupes musicaux à travers une API publique. L’interface affiche les concerts sur une carte et permet de filtrer les artistes.",
    imageSrc: '/solutions/groupietracker.png', // Replace with the actual image path
    projectLink: "https://github.com/galsen-boy/groupie-tracker", // <-- Add the link for eCarga
    trophyType: "first", // Specify the trophy type
     techStackIcons: [ // <-- Add paths to tech stack icons for eCarga
        '/techstack/css.svg',
        '/techstack/html-5-svgrepo-com.svg',
        '/techstack/javascript.svg',
        '/techstack/go-svgrepo-com.svg',
     ],
  },
  {
    entryNumber: "05",
    title: "Bomberman Dom",
    award: "Fun Game Project",
    description: "Jeu multijoueur inspiré du classique Bomberman, développé avec logique temps réel, détection de collision, explosion et rendu 2D. Conçu pour apprendre la synchronisation réseau et les systèmes de jeu.",
    imageSrc: '/solutions/bomberman.png', // Replace with the actual image path
    projectLink: "https://github.com/galsen-boy/bomberman-dom", // <-- Add the link for Neosolutions
    trophyType: "participant", // Specify the trophy type (using participant as a placeholder for Top 5)
    techStackIcons: [ // <-- Add paths to tech stack icons for Neosolutions
        '/techstack/go-svgrepo-com.svg',
        '/techstack/javascript.svg',
        '/techstack/websockets.svg',
        '/techstack/css.svg',
        '/techstack/html-5-svgrepo-com.svg',
    ],
  }
];

export default function Hackathons() {
  return (
    <>
      {/* Main content area for Hackathons */}
      <main className="flex-grow flex flex-col items-center h-full relative pt-20">
      { /* Make this hidden on mobile */ }
      {/* Added responsive hidden class */}
        <div className="hidden md:block" style={{ width: '100%', height: '600px', position: 'absolute', top: '0', zIndex: -1, opacity: 0.5 }}>
          <Threads
            amplitude={2.5}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Hackathon Entries Section */}
        <div className="flex w-full items-center justify-center p-4">
          <BlurText
            text="Hackathon Entries"
            delay={50}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl md:text-7xl font-extrabold text-center"
          />
        </div>

        <RollingGallery autoplay={true} pauseOnHover={false} />

        {/* Adjusted padding for responsiveness */}
        <div className="flex flex-col w-full max-w-5xl mx-auto p-4 md:p-4 my-10 md:my-20"> {/* Changed p-15 to p-4 */}
          {/* Falling Text for Desktop */}
          <div className="hidden md:block">
            <FallingText
              text={` En plus d’être développeur et analyste en cybersécurité, je participe activement à des compétitions, comme les hackathons. C’est un excellent moyen de travailler sur des problèmes concrets et de rencontrer des personnes intéressantes. Voici quelques-uns des événements auxquels j’ai participé :`}
              highlightWords={["hackathons", "competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

          {/* Falling Text for Mobile */}
          {/* Adjusted margin bottom */}
          <div className="md:hidden mb-10"> {/* Changed mb-25 to mb-10 for smaller mobile margin */}
            <FallingText
              text={` En plus d’être développeur et analyste en cybersécurité, je participe activement à des compétitions, comme les hackathons. C’est un excellent moyen de travailler sur des problèmes concrets et de rencontrer des personnes intéressantes. Voici quelques-uns des événements auxquels j’ai participé :`}
              highlightWords={["hackathons", "competitions", "problems", "interesting", "events"]}
              trigger="hover"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="1rem"
              mouseConstraintStiffness={0.9}
            />
          </div>


          {/* Render Hackathon Entries */}
          {/* Adjusted margin top for responsiveness */}
          <div className="mt-20 md:mt-40"> {/* Adjusted margin top */}
            {hackathonEntriesData.map((entry, index) => (
              <HackathonEntry
                key={index}
                entryNumber={entry.entryNumber}
                title={entry.title}
                award={entry.award}
                description={entry.description}
                imageSrc={entry.imageSrc}
                projectLink={entry.projectLink} // Pass the project link
                trophyType={entry.trophyType} // Pass the trophy type
                techStackIcons={entry.techStackIcons} // Pass the tech stack icons array
              />
            ))}
          </div>
        </div>


      </main>

      {/* Footer Section */}
      <footer className="flex w-full items-center justify-center p-4 border-t border-white/[.15] text-white/50 text-sm font-light mt-20">
        <p>&copy; {new Date().getFullYear()} DAIBOU BA. All rights reserved.</p>
      </footer>
    </>
  );
};
