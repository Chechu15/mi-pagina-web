// src/routes/about-me.tsx
import React from 'react';

export function meta({}: { [key: string]: any }) {
  return [
    { title: "About Me" },
    { name: "description", content: "Información sobre mí" },
  ];
}

export default function AboutMe() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800 dark:text-white">
          Dr. Breen welcoming Citizens to City 17
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
          Welcome. Welcome to City 17. You have chosen, or been chosen, to relocate to one of our finest remaining urban centers. 
          I thought so much of City 17 that I elected to establish my Administration here, in the Citadel so thoughtfully provided by Our Benefactors.
          I have been proud to call City 17 my home. And so, whether you are here to stay, or passing through on your way to parts unknown, welcome to City 17.
          It's safer here.
        </p>
      </div>
    );
  }