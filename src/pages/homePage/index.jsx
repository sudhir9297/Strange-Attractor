import React, { useRef, useEffect, useMemo, Suspense, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  Environment,
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

  let meshList = [...new Array(points.length)].map(() => new THREE.Object3D());
  meshList.forEach((mesh, i) => {
    mesh.position.set(points[i][0], points[i][1], points[i][2]);
  });
  const instance = useRef();

  useEffect(() => {
    let id = 0;
    for (let i = 0; i < meshList.length; i++) {
      meshList[id].updateMatrix();
      instance.current.setMatrixAt(id, meshList[id++].matrix);
    }
    instance.current.instanceMatrix.needsUpdate = true;
  });

  const { size, ...props } = useControls({
    size: { value: 0.5, min: 0, max: 1, step: 0.01 },
    color: "#FFD700",
    metalness: { value: 0.93, min: 0, max: 1 },
    roughness: { value: 0.1, min: 0, max: 1 },
  });

  const s = 1 + Math.sin(2 * 10) / 10;
  return (
    <instancedMesh
      ref={instance}
      args={[null, null, meshList.length]}
      receiveShadow
      castShadow
    >
      <roundedBoxGeometry
        receiveShadow
        args={[size * s, size * s, size * s, 1, 0.075]}
      />
      {/* <sphereBufferGeometry args={[size]} castShadow receiveShadow>
        <instancedBufferAttribute />
      </sphereBufferGeometry> */}
      <meshStandardMaterial {...props} attach="material" />
    </instancedMesh>
  );
};

function HomePage() {
  const [currentAttractor, setCurrentAttractor] = useState(attractor[0]);
  const [useUiMenu, setUiMenu] = useState(true);
  console.log(currentAttractor);

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
          <PerspectiveCamera makeDefault position={[100, 100, 100]} />
          <OrbitControls makeDefault />
          {/* <ContactShadows
            position={[0, -1, 0]}
            opacity={1}
            scale={10}
            blur={1}
            far={1}
          /> */}
          <group rotation={[0, Math.PI, 0]}>
            <Attractor attractorData={currentAttractor} useUiMenu={useUiMenu} />
          </group>

          {!useUiMenu && <Leva hidden />}
        </Suspense>

        <ambientLight intensity={1} />
        <pointLight position={[-10, 0, 0]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={2} castShadow />

        <color args={[backgroundColor]} attach="background" />
      </Canvas>
    </div>
  );
}

export default HomePage;
