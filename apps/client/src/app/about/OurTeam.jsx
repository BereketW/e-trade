import React from "react";
import Image from "next/image";
import firo from "./assets/firo.jpg";
import fitse from "./assets/Fitse.jpg";
import beki from "./assets/beki.jpg";

const OurTeam = () => {
  const images = [
    {
      image: firo,
      role: "Software Engineer",
      name: "Firomsa Hika",
    },
    {
      image: fitse,
      role: "Software Engineer",
      name: "Fitsum Tafese",
    },
    {
      image: beki,
      role: "Software Engineer",
      name: "Bereket",
    },
  ];
  return (
    <main className="w-full bg-gray-200 px-14 ">
      <div className="flex flex-col">
        <div>
          <p className="text-xl text-indigo-600 font-semibold py-4">Our Team</p>
          <p className="text-4xl font-semibold">Expert Developer Team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
          {images.map(({ image, role, name }) => (
            <div
              key={image}
              className="shadow-2xl flex flex-col items-center justify-center rounded-3xl  p-6"
            >
              <Image
                className="size-40 object-contain rounded-full"
                src={image}
              />
              <p className="py-4 text-gray-500">{role}</p>
              <p className="text-2xl font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurTeam;
