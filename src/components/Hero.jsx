'use client'
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBookOpen} from 'react-icons/fa';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

const roles = ["Software Engineer", "AI/ML Engineer", "Cloud Engineer", "ソフトウェアエンジニア"];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const period = 2000;

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
    <section id="hero" className="relative bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-opacity-50"></div>
      <div className="relative z-10 px-8 sm:px-16 md:px-20 lg:px-24 xl:px-32 flex flex-col items-start">
        <div className="max-w-xl lg:max-w-3xl"> 
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ minHeight: '48px' }}>
            {currentRole}
          </h2>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Naufal Rahfi Anugerah
          </h2>
          <p className="hero-text text-lg mb-8">
            A versatile software engineer with a rapid learning curve, specializing in AI, Machine Learning, 
            Cloud Computing, and Website Development, committed to delivering advanced and impactful technological solutions.
          </p>
          <div className="flex items-center space-x-4"> {/* Add space between items */}
            <Button as={Link} color="primary" href="#" variant="bordered" startContent={<FaBookOpen />}>
              Explore Blog
            </Button>
            <a href="mailto:rahfi@example.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-3xl" />
            </a>
            <a href="https://github.com/rahfianugerah" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl" />
            </a>
            <a href="https://linkedin.com/in/rahfianugerah" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

