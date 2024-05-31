import React from "react";
import Image from "next/image";
import shape1 from "./assets/shape-01.png";
import shape2 from "./assets/shape-02.png";
import shape3 from "./assets/shape-03.png";

const AboutExperience = () => {
  const datas = [
    {
      id: 1,
      image: shape1,
      title: "40,000+ Happy Customer",
      description:
        "Empower your sales teams with industry tailored solutions that support.",
    },
    {
      id: 2,
      image: shape2,
      title: "16 Years of Experiences",
      description:
        "Empower your sales teams with industry tailored solutions that support.",
    },
    {
      id: 3,
      image: shape3,
      title: "12 Awards Won",
      description:
        "Empower your sales teams with industry tailored solutions that support.",
    },
  ];
  return (
    <main className="flex w-full items-center justify-center px-20 py-24">
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {datas.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="flex flex-col shadow-2xl p-8 hover:border hover:border-blue-400"
            >
              <Image alt="" src={image} />
              <p className="py-4 font-semibold text-xl">{title}</p>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutExperience;
