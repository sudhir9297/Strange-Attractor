import React, { useRef, useEffect, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  Environment,
  Tube,
  useHelper,
} from "@react-three/drei";
import { Leva } from "leva";

import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import * as THREE from "three";
import { attractor, colorList } from "../../constants";

import CanvasOption from "./canvasOptions";
import Effect from "./Effect";
import Attractor from "./Attractor";

extend({ RoundedBoxGeometry });

const OtherStuff = () => {
  const contactShadow = useRef();
  useHelper(false && contactShadow, THREE.BoxHelper, "cyan");

  return (
    <group>
      <ContactShadows
        ref={contactShadow}
        opacity={1}
        scale={[330, 330]}
        blur={1}
        far={20}
        position={[0, 0, 0]}
      />
    </group>
  );
};

function HomePage() {
  const [currentAttractor, setCurrentAttractor] = useState(attractor[0]);
  const [useUiMenu, setUiMenu] = useState(true);

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

  // let data = {};
  // data = useControls({ ...currentAttractor.data.menuData });

  // if (!useUiMenu) {
  //   const useStore = createStrore(() => currentAttractor.data.state);
  //   data = useStore.getState();
  // }

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
          <PerspectiveCamera makeDefault position={[80, 80, 80]} />
          <OrbitControls makeDefault />

          {/* <OtherStuff /> */}
          <Attractor attractorData={currentAttractor} useUiMenu={useUiMenu} />
          {!useUiMenu && <Leva hidden />}
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
