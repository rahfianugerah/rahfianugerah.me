'use client'
import React, { useState, useEffect } from 'react';
import ScrollProgressAside from './ProgressBar.jsx';
import { FaProjectDiagram } from 'react-icons/fa';
import { Button } from '@nextui-org/button';

const roles = ["Software Engineer", "AI Engineer", "Cloud Engineer"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const period = 2000; // Pause between changing words

  useEffect(() => {
    let typingTimeout;
    
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setCurrentRole(
        isDeleting ? fullText.substring(0, currentRole.length - 1) : fullText.substring(0, currentRole.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentRole === fullText) {
        typingTimeout = setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentRole, isDeleting, loopNum, typingSpeed]);

  return (
    <>
      <ScrollProgressAside />
      <section id="hero" className="relative bg-cover bg-center h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-#0a0a0a bg-opacity-50"></div>
        <div className="relative z-10 text-white px-8 sm:px-16 md:px-20 lg:px-24 xl:px-32 -mt-24 flex flex-col items-start">
          <div className="max-w-xl lg:max-w-3xl"> 
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ minHeight: '48px' }}>
              {currentRole}
            </h2>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              I&apos;m Naufal Rahfi Anugerah
            </h2>
            <p className="hero-text text-lg sm:text-xl mb-8 pr-8">
              A versatile software engineer with a rapid learning curve, specializing in AI, Machine Learning, Cloud Computing, and Website Development, committed to delivering advanced and impactful technological solutions.
            </p>
            <Button color="primary" variant="bordered" startContent={<FaProjectDiagram/>}>
                  Explore Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
