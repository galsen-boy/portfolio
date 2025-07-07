'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
// Removed unused import
// import { comma } from 'postcss/lib/list';


const experiences = [
  // ... your experiences array - Keep this array as is
  {
    id: 1,
    title: 'Beginner dev',
    company: 'Zone01 Dakar',
    year: '2023',
    description: 'J\’ai débuté par l\’apprentissage des fondamentaux de la programmation (algorithmes, structures de données, logique) et des outils comme Git, Linux et les éditeurs de code. J\’ai réalisé plusieurs petits projets en autonomie, ce qui m\’a permis de comprendre le cycle de vie d\’un logiciel et de me familiariser avec le travail en peer-to-peer.',
    logo: '/exp_logos/zone.png',
  },
  {
    id: 2,
    title: 'Assistant dev',
    company: 'Zone01 Dakar',
    year: '2023',
    description: 'J\’ai contribué à des projets collaboratifs en tant qu\’assistant développeur, en assurant des tâches telles que la documentation technique, le débogage de fonctions simples, l\’intégration de composants UI ou la validation de données. Ce rôle m\’a appris à suivre des consignes précises, à respecter les conventions d\’équipe et à améliorer mon code via les revues de pairs.',
    logo: '/exp_logos/zone.png',
  },
  {
    id: 3,
    title: 'Junior dev',
    company: 'Zone01 Dakar',
    year: '2024',
    description: `En tant que développeur junior, j\’ai développé des fonctionnalités complètes sur des projets concrets : réseaux sociaux, API GraphQL, moteurs de jeux 2D et outils système comme Netcat. J\’ai également participé à l\’analyse de besoins, la gestion de versions, et l\’optimisation du code, tout en collaborant avec d\’autres profils techniques.`,
    logo: '/exp_logos/zone.png',
  },
  {
    id: 4,
    title: 'Confirmed dev',
    company: 'Zone01 Dakar',
    year: '2024',
    description: 'Sur certains projets complexes comme le simulateur de bourse, le FPS multijoueur ou le ray tracing en Rust, j\’ai assuré la conception, le développement et le test de modules entiers. J\’ai encadré des débutants dans leur montée en compétences et participé aux choix technologiques, en veillant à la qualité, à la sécurité et à la maintenabilité du code.',
    logo: '/exp_logos/zone.png',
  },
  {
    id: 5,
    title: 'Full-stack dev',
    company: 'Zone01 Dakar',
    year: '2025',
    description: `J\’ai développé des applications web de bout en bout, en prenant en charge à la fois le frontend (interfaces en React.js, Vue.js ou Tailwind CSS) et le backend (API REST ou GraphQL en Go ou Node.js). J\’ai conçu des bases de données relationnelles avec SQLite ou PostgreSQL, géré l\’authentification sécurisée (JWT, sessions), et déployé des projets en environnement Linux avec Docker. Cette polyvalence m\’a permis d\’assurer une cohérence technique sur toute la chaîne de développement.`,
    logo: '/exp_logos/zone.png',
  },
  {
    id: 6,
    title: 'cybersecurity specialist',
    company: 'Zone01 Dakar',
    year: '2025',
    description: 'J\’ai mené plusieurs audits et tests de sécurité sur des applications web et réseau. J\’ai utilisé des outils comme Wireshark, Burp Suite, Nmap et Ghidra pour analyser le trafic, détecter les failles et comprendre le fonctionnement de binaires. J\’ai également participé à des CTF (Capture The Flag) sur des plateformes comme HackTheBox pour mettre en pratique mes compétences en reverse engineering, exploitation de vulnérabilités, et sécurisation de services. J\’anime régulièrement des sessions de sensibilisation à la cybersécurité auprès d\'autres développeurs.',
    logo: '/exp_logos/zone.png',
  },
];

const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // Adjust offset as needed
  });

  // Smooth the scroll progress value for the line and dot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    // Increased restDelta slightly. This means the spring animation
    // will consider itself 'at rest' sooner, potentially reducing
    // updates when the dot reaches the end of the scroll.
    restDelta: 0.01
  });

  // Create a motion value for the dot's top position, based on the *sprung* scaleY value
  // We map the scaleY value (which goes from 0 to 1) to the full height of the container (0% to 100%)
  const dotTop = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Central Timeline Line */}
      {/* Framer Motion automatically promotes transform properties for hardware acceleration */}
      <motion.div
        className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-cyan-600 to-cyan-800 transform -translate-x-1/2"
        style={{ scaleY: scaleY, transformOrigin: 'top' }}
      />

      {/* Glowing Dot */}
      {/* Framer Motion handles the 'top' style updates efficiently */}
      <motion.div
        className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2"
        // Use the dotTop motion value (derived from the sprung scaleY) for the top style
        style={{ top: dotTop }}
        // Optional: Add will-change property as a hint to the browser (use with caution)
        // className="absolute left-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_5px_rgba(0,255,255,0.5)] transform -translate-x-1/2 will-change-top"
      />


      <div className="relative space-y-24">
        {experiences.map((exp, index) => (
          // Changed grid to 2 columns, removed the 'auto' middle column
          <div key={exp.id} className="relative grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 bg-black rounded-2xl p-6 shadow-lg md:bg-transparent">
            {/* Side 1: Title, Company, Year, Logo - Conditional Alignment */}
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <h3 className="md:text-2xl text-xl font-bold text-gray-100">{exp.title}</h3>

              <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
              {/* Year */}
              <span
                className="md:text-xl text-md font-regular text-gray-400 mb-2"
                style={{ letterSpacing: '0.4em' }}
              >
                {exp.year}
              </span>

              {/* Logo */}
              <div className="w-10 h-10 relative flex items-center justify-center md:my-0 my-5"> {/* Added flex centering for logos */}
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  style={{ objectFit: 'contain' }} // Use contain to show the whole logo
                  unoptimized // Keep if necessary for SVGs, but test without if possible
                />
              </div>
            </div>

            {/* Side 2: Description - Conditional Alignment */}
            <div className={`text-gray-300 md:text-lg text:md ${index % 2 !== 0 ? 'md:text-right' : 'text-left'} ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;