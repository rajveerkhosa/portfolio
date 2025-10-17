"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  link?: string;
}

export default function ProjectCard({ title, description, image, techStack, link }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`group ${link ? "cursor-pointer" : ""}`}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className="bg-[#1a1a1a] border border-gray-800 rounded-3xl p-8 hover:border-[#00ff9f] transition-all duration-300"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="mb-6 h-64 bg-gray-800 rounded-2xl overflow-hidden relative">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              Coming Soon
            </div>
          )}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
