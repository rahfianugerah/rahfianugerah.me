'use client';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faSpotify, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Avatar } from "@nextui-org/react";

export default function Profile() {
  const [activeSection, setActiveSection] = useState('experiences'); // State to control active section

  return (
    <div className="flex flex-col items-center h-screen">
      {/* Navbar */}
      <nav className="text-white w-full flex justify-center space-x-8 p-4">
        <button
          className={`navbar-link hover:text-gray-400 ${activeSection === 'experiences' && 'text-blue-500'}`}
          onClick={() => setActiveSection('experiences')}
        >
          <p className="navbar-text">Experiences</p>
        </button>
        <button
          className={`navbar-link hover:text-gray-400 ${activeSection === 'learning-certificate' && 'text-blue-500'}`}
          onClick={() => setActiveSection('learning-certificate')}
        >
          <p className="navbar-text">Learning Certificates</p>
        </button>
        <button
          className={`navbar-link hover:text-gray-400 ${activeSection === 'certified-certificate' && 'text-blue-500'}`}
          onClick={() => setActiveSection('certified-certificate')}
        >
          <p className="navbar-text">Certified Certificates</p>
        </button>
      </nav>

      {/* Profile Info (as div) */}
      <div className="flex justify-center items-start mt-10">
        <div className="relative w-[300px] p-6">
          <div className="flex flex-col items-center justify-between text-center">
            <Avatar isBordered radius="full" className="mt-2 w-24 h-24" src="" />
            <div className="flex flex-col gap-1 items-center mt-3">
              <h4 className="text-small font-semibold leading-none text-gray-300">Naufal Rahfi Anugerah</h4>
              <h5 className="text-small tracking-tight text-gray-400">@rahfianugerah</h5>
            </div>
            <p className="text-center px-2 mt-3">
              <span className="text-blue-500">#SoftwareEngineer</span> skilled in AI/ML, Cloud and Web
            </p>
          </div>
          <div className="flex justify-center gap-4 items-center mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSpotify} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Dynamic Section Content */}
      <div className="mt-8 w-full max-w-xl p-4">
        {activeSection === 'experiences' && <Experiences />}
        {activeSection === 'learning-certificate' && <LearningCertificate />}
        {activeSection === 'certified-certificate' && <CertifiedCertificate />}
      </div>
    </div>
  );
}

function Experiences() {
  return (
    <div className="text-white text-center">
      <h2 className="text-2xl font-semibold mb-4">Experiences</h2>
      <p>Details about your work experiences go here...</p>
    </div>
  );
}

function LearningCertificate() {
  return (
    <div className="text-white text-center">
      <h2 className="text-2xl font-semibold mb-4">Learning Certificates</h2>
      <p>Details about your learning certificates go here...</p>
    </div>
  );
}

function CertifiedCertificate() {
  return (
    <div className="text-white text-center">
      <h2 className="text-2xl font-semibold mb-4">Certified Certificates</h2>
      <p>Details about your certified certificates go here...</p>
    </div>
  );
}
