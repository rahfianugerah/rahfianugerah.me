'use client';
import React from "react";
import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";

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
            
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
