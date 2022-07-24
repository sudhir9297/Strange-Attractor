import React, { useRef, useEffect, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  Environment,
  Tube,
} from "@react-three/drei";
import createStrore from "zustand";
import { useControls, Leva } from "leva";

import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import * as THREE from "three";
import { attractor, colorList } from "../../constants";

import CanvasOption from "./canvasOptions";

extend({ RoundedBoxGeometry });

const Attractor = ({
  attractorData: {
    data: { menuData, state },
    func,
  },
  useUiMenu,
}) => {
  // let data = useControls({ ...menuData }, [menuData]);
  // data = useControls({ ...menuData }, [menuData]);

  // if (!useUiMenu) {
  //   const useStore = createStrore(() => state);
  //   data = useStore.getState();
  // }

  const points = func(state);

  var newPoints = [];
  for (var i = 0; i < points.length; i++) {
    newPoints.push(new THREE.Vector3(points[i][0], points[i][1], points[i][2]));
  }

  var curve = new THREE.CatmullRomCurve3(newPoints);

  const { segment, radius, crossSection, ...argsVal } = useControls({
    segment: { value: 20000, min: 1000, max: 50000 },
    radius: { value: 0.2, min: 0, max: 5, step: 0.1 },
    crossSection: { value: 10, min: 0, max: 20, step: 1 },
    color: "#B76E79",
    metalness: { value: 0.9, min: 0, max: 1 },
    roughness: { value: 0.07, min: 0, max: 1 },
  });

  return (
    <Tube args={[curve, segment, radius, crossSection, false]}>
      <meshStandardMaterial {...argsVal} attach="material" />
    </Tube>
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
          {/* <ContactShadows
            position={[0, -1, 0]}
            opacity={1}
            scale={10}
            blur={1}
            far={1}
          /> */}

          <Attractor attractorData={currentAttractor} useUiMenu={useUiMenu} />

          {!useUiMenu && <Leva hidden />}
        </Suspense>

        <ambientLight intensity={1} />
        {/* <pointLight position={[-10, 0, 0]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} castShadow /> */}

        <color args={[backgroundColor]} attach="background" />
      </Canvas>
    </div>
  );
}

export default HomePage;
