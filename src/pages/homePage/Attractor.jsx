import React, { useRef, useEffect } from "react";
import { useControls } from "leva";
import * as THREE from "three";
import Floor from "./Floor";

const Attractor = ({
  attractorData: {
    data: { menuData, state },
    func,
    shadowPosition,
    groupPosition,
    structuredRotation,
    structuredPosition,
  },
  useUiMenu,
}) => {
  // let data = useControls({ ...menuData }, [menuData]);

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

  const { ...props } = useControls({
    color: "#C784AF",
    metalness: { value: 0.93, min: 0, max: 1 },
    roughness: { value: 0.1, min: 0, max: 1 },
  });

  return (
    <group position={groupPosition}>
      <instancedMesh
        ref={instance}
        args={[null, null, meshList.length]}
        receiveShadow
        castShadow
        rotation={structuredRotation}
        position={structuredPosition}
      >
        <sphereBufferGeometry args={[state.size]} castShadow receiveShadow>
          <instancedBufferAttribute />
        </sphereBufferGeometry>

        <meshStandardMaterial {...props} attach="material" />
      </instancedMesh>
      <Floor shadowPosition={shadowPosition} />
    </group>
  );
};

export default Attractor;
