import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

import { attractor, colorList } from "../../constants";
import CanvasOption from "./canvasOptions";
import DotAttractor from "./DotAttractor";
import TubeAttractor from "./TubeAttractor";

function HomePage() {
  const [useDot, setUseDot] = useState(false);

  const [reRender, setReRender] = useState(false);

  const [currentAttractor, setCurrentAttractor] = useState(attractor[0]);

  useEffect(() => {
    setTimeout(() => {
      handleAttractorClicked(attractor[0]);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setReRender(true);
    }, 800);
  }, [currentAttractor]);

  const [backgroundColor, setBackgroundColor] = useState(colorList[0].color);

  const [attractorDropDown, setAttractorDropDown] = useState(false);

  const handleColorClicked = (value) => {
    setBackgroundColor(value);
  };

  const handleSwitchAttractor = () => {
    setUseDot(!useDot);
  };

  const handleAttractorDropdown = () => {
    setAttractorDropDown(!attractorDropDown);
  };

  const handleAttractorClicked = (value) => {
    setCurrentAttractor(value);
    setReRender(false);
  };

  return (
    <div className="w-screen h-screen z-0 relative overflow-hidden">
      <CanvasOption
        handleColorClicked={handleColorClicked}
        attractorDropDown={attractorDropDown}
        handleAttractorDropdown={handleAttractorDropdown}
        handleAttractorClicked={handleAttractorClicked}
        useDot={useDot}
        handleSwitchAttractor={handleSwitchAttractor}
        currentAttractor={currentAttractor}
        backgroundColor={backgroundColor}
      />

      <Canvas>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <PerspectiveCamera
            makeDefault
            position={currentAttractor.cameraPosition}
          />
          <OrbitControls makeDefault enablePan={false} enableZoom={true} />

          {useDot ? (
            <DotAttractor
              attractorData={currentAttractor}
              reRender={reRender}
            />
          ) : (
            <TubeAttractor
              attractorData={currentAttractor}
              reRender={reRender}
            />
          )}
        </Suspense>

        <ambientLight intensity={1} />
        <pointLight position={[-10, 0, 0]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} castShadow />

        <color args={[backgroundColor]} attach="background" />
      </Canvas>
      <div className="absolute bottom-0 px-2  right-0 mr-4 mb-4 bg-black/50 text-white rounded">
        {currentAttractor.name}
      </div>
    </div>
  );
}

export default HomePage;
