'use client';
import React from "react";
import { Card, CardHeader, CardBody, Avatar, CardFooter } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faSpotify, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  return (
    <div className="flex justify-center items-start h-screen">
      <div className="relative mt-5">
        {/* Outline and shadow behind the card */}
        <div className="absolute inset-0 bg-transparent border-2 border-white rounded-lg shadow-lg transform translate-x-2 translate-y-2" />
        <Card className="relative w-[300px] backdrop-blur-lg bg-[#1f1f1f] z-10">
          <CardHeader className="flex flex-col items-center justify-between text-center">
            <Avatar isBordered radius="full" className="mt-2 w-24 h-24" src="https://nextui.org/avatars/avatar-1.png" />
            <div className="flex flex-col gap-1 items-center">
              <h4 className="text-small mt-3 font-semibold leading-none text-default-600">Naufal Rahfi Anugerah</h4>
              <h5 className="text-small tracking-tight text-default-400">@rahfianugerah</h5>
            </div>
          </CardHeader>
          <CardBody>
            <p className="text-center px-2">
              <span className="text-blue-500">#SoftwareEngineer</span> skilled in AI/ML, Cloud and Web
            </p>
          </CardBody>
          <CardFooter className='flex justify-center gap-4 items-center'>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSpotify} className="text-white w-6 h-6 hover:text-gray-400" />
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
