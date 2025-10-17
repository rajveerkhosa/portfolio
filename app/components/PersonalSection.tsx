"use client";

import ShootingStarsText from "./ShootingStarsText";
import RotatingWord from "./RotatingWord";

export default function PersonalSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-relaxed">
          <span className="text-gray-400">Hello again?</span>
          <br />
          <span className="text-gray-400">My nickname is </span>
          <ShootingStarsText>
            <span className="text-white font-bold">Raj</span>
          </ShootingStarsText>
        </h1>

        <div className="mt-16">
          <p className="text-gray-400 text-lg md:text-xl mb-4">
            Raj is <span className="text-white font-semibold"><RotatingWord /></span>
          </p>
        </div>
      </div>
    </div>
  );
}
