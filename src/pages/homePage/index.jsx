import React, { useRef, useEffect, useMemo, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  Environment,
  useGLTF,
  Instances,
  Instance,
} from "@react-three/drei";
import createStrore from "zustand";
import { useControls, Leva } from "leva";

import * as THREE from "three";

import { attractor } from "../../constants";

const Attractor = ({
  attractorData: {
    data: { menuData, state },
    func,
  },
  useUiMenu,
}) => {
  let data = {};
  data = useControls({ ...menuData });

  if (!useUiMenu) {
    const useStore = createStrore(() => state);
    data = useStore.getState();
  }

  const points = func(data);

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

  const { ...props } = useControls({
    color: "#FFD700",
    metalness: { value: 0.73, min: 0, max: 1 },
    roughness: { value: 0.11, min: 0, max: 1 },
  });

  return (
    <instancedMesh ref={instance} args={[null, null, meshList.length]}>
      <sphereBufferGeometry args={[0.1]} castShadow receiveShadow>
        <instancedBufferAttribute />
      </sphereBufferGeometry>
      <meshStandardMaterial {...props} attach="material" />
    </instancedMesh>
  );
};

function HomePage() {
  const [currentAttractor, setCurrentAttractor] = useState(attractor[4]);
  const [useUiMenu, setUiMenu] = useState(true);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Canvas>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <PerspectiveCamera makeDefault position={[100, 100, 100]} />
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

        <color args={["#162837"]} attach="background" />
      </Canvas>
    </div>
  );
}

export default HomePage;
