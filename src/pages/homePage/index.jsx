import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Leva } from "leva";

import { attractor, colorList } from "../../constants";

import CanvasOption from "./canvasOptions";
import Effect from "./Effect";

import Attractor from "./Attractor";

function HomePage() {
  const [currentAttractor, setCurrentAttractor] = useState(attractor[0]);

  const [colorDropDown, setColorDropDown] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState(colorList[0].color);

  const [attractorDropDown, setAttractorDropDown] = useState(false);

  const handleColorDropDown = (value) => {
    setColorDropDown(value);
  };

  const handleColorClicked = (value) => {
    setBackgroundColor(value);
  };

  const handleAttractorDropdown = () => {
    setAttractorDropDown(!attractorDropDown);
  };

  const handleAttractorClicked = (value) => {
    setCurrentAttractor(value);
  };

  return (
    <div className="w-screen h-screen z-0 relative">
      <CanvasOption
        colorDropDown={colorDropDown}
        handleColorDropDown={handleColorDropDown}
        handleColorClicked={handleColorClicked}
        attractorDropDown={attractorDropDown}
        handleAttractorDropdown={handleAttractorDropdown}
        handleAttractorClicked={handleAttractorClicked}
      />

      <Canvas>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <PerspectiveCamera
            makeDefault
            position={currentAttractor.cameraPosition}
          />
          <OrbitControls makeDefault />
          <Attractor attractorData={currentAttractor} />
        </Suspense>

        <ambientLight intensity={1} />
        <pointLight position={[-10, 0, 0]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} castShadow />

        <color args={[backgroundColor]} attach="background" />

        {/* <Effect /> */}
      </Canvas>
      <div className="absolute bottom-0 px-2  left-0 ml-4 mb-4 bg-black/50 text-white">
        {currentAttractor.name}
      </div>
    </div>
  );
}

export default HomePage;
