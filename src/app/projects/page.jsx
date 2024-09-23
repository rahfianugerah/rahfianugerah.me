'use client';
import { useState, useEffect } from 'react';
import { Card, CardBody, CardFooter, Image, CardHeader } from "@nextui-org/react";
import { Button } from '@nextui-org/button';

export default function Projects() {
  const list = [
    {
      title: "Orange",
      img: "projects.jpeg",
      tag: "Citrus",
    },
    {
      title: "Tangerine",
      img: "projects.jpeg",
      tag: "Citrus",
    },
    {
      title: "Raspberry",
      img: "projects.jpeg",
      tag: "Berry",
    },
    {
      title: "Lemon",
      img: "projects.jpeg",
      tag: "Citrus",
    },{
      title: "Orange",
      img: "projects.jpeg",
      tag: "Citrus",
    },
    {
      title: "Tangerine",
      img: "projects.jpeg",
      tag: "Citrus",
    },
  ];

  // State to manage selected category (default is 'All')
  const [selectedTag, setSelectedTag] = useState('</>');
  const [isFading, setIsFading] = useState(false);

  // Filter the list of projects based on the selected tag
  const filteredList = selectedTag === '</>'
    ? list
    : list.filter(item => item.tag === selectedTag);

  // List of unique tags for category buttons
  const tags = ['</>', ...new Set(list.map(item => item.tag))];

  // Use effect to trigger fade-in animation on initial load and on tag change
  useEffect(() => {
    setIsFading(true);
    const timeout = setTimeout(() => setIsFading(false), 300); // 300ms fade duration
    return () => clearTimeout(timeout);
  }, [selectedTag]);

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <p className="text-3xl font-bold text-center my-8">Project Section</p>
        
        {/* Category buttons */}
        <div className="flex gap-4 mb-8">
          {tags.map(tag => (
            <Button
              key={tag}
              className={`text-white ${selectedTag === tag ? 'bg-blue-600' : 'bg-gray-400'} hover:bg-blue-700`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Display filtered projects with fade animation */}
        <div className={`gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center mx-auto ${isFading ? 'fade-in' : ''}`}>
          {filteredList.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 bg-transparent border-4 border-white rounded-lg shadow-lg transform translate-x-2 translate-y-2" />
              <Card
                shadow="sm"
                className="relative w-[225px] backdrop-blur-lg bg-[#1f1f1f] z-10" // Use z-index to keep card above the shadow
              >
                <CardHeader className="pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">Daily Mix</p>
                  <small className="text-default-500">12 Tracks</small>
                  <h4 className="font-bold text-large">Project Source</h4>
                </CardHeader>
                <CardBody className="overflow-visible p-0">
                  <div
                    className="cursor-pointer w-full"
                    onClick={() => console.log(`${item.title} image clicked`)}
                  >
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.title}
                      className="w-full object-cover h-[140px]"
                      src={item.img}
                    />
                  </div>
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <Button
                    className="text-tiny text-white bg-white/20 backdrop-blur-md"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                    onClick={() => console.log(`${item.title} - Button Clicked!`)}
                  >
                    Click here!
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for the fade animation */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transition: opacity 0.3s ease-in;
        }

        .fade-in.fade-in {
          opacity: 1;
        }
      `}</style>
    </>
  );
}