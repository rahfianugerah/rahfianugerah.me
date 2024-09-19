'use client'
import React from 'react';
import ScrollProgressAside from './ProgressBar.jsx'; // Import the aside component

export default function Hero() {
  return (
    <>
      <ScrollProgressAside />

      <section id="hero" className="relative bg-cover bg-center h-screen flex items-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-#0a0a0a bg-opacity-50"></div>
        <div className="relative z-10 text-white pl-8 sm:pl-16 md:pl-20 lg:pl-24 xl:pl-32 -mt-12">
          <div className="max-w-xl lg:max-w-3xl"> 
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              AI Engineer
            </h2>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              I&apos;m Naufal Rahfi Anugerah
            </h2>
            <p className="hero-text text-lg sm:text-xl mb-8 pr-8">
              A versatile software engineer with a rapid learning curve, specializing in AI, Machine Learning, Cloud Computing, and Website Development, committed to delivering advanced and impactful technological solutions.
            </p>
            <a href="#contact" className="inline-flex items-center bg-primary hover:bg-secondary transition-colors px-6 py-3 rounded-full text-lg font-medium">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
