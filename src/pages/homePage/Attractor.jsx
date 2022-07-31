import React, { useRef, useEffect, useMemo } from "react";
// import { useControls } from "leva";
// import { extend, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import niceColors from "nice-color-palettes";

// import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

import Floor from "./Floor";
// extend({ RoundedBoxGeometry });

const Attractor = ({
  attractorData: {
    data: { menuData, state },
    func,
    shadowPosition,
    groupPosition,
    structuredRotation,
    structuredPosition,
    shadowScale,
    shadowFar,
  },
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
  }, [meshList]);

  const tempColor = new THREE.Color();
  const data = Array.from({ length: 50784 }, () => ({
    color:
      niceColors[Math.floor(Math.random() * 60)][Math.floor(Math.random() * 5)],
  }));

  const colorArray = useMemo(
    () =>
      Float32Array.from(
        new Array(50784)
          .fill()
          .flatMap((_, i) => tempColor.set(data[i].color).toArray())
      ),
    []
  );

  // useFrame((state) => {
  //   const time = state.clock.getElapsedTime();

  //   let id = 0;
  //   for (let i = 0; i < meshList.length; i++) {
  //     meshList[id].rotation.y = 2 + time;
  //     meshList[id].rotation.z = meshList[id].rotation.y * 2;
  //     meshList[id].updateMatrix();
  //     instance.current.setMatrixAt(id, meshList[id++].matrix);
  //   }
  //   instance.current.instanceMatrix.needsUpdate = true;
  // });

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
        {/* <roundedBoxGeometry
          args={[
            1.2 * state.size,
            1.2 * state.size,
            1.2 * state.size,
            1,
            0.075 * state.size,
          ]}
        >
          <instancedBufferAttribute
            attach="attributes-color"
            args={[colorArray, 3]}
          />
        </roundedBoxGeometry> */}

        <sphereBufferGeometry args={[state.size]} castShadow receiveShadow>
          <instancedBufferAttribute
            attach="attributes-color"
            args={[colorArray, 3]}
          />
        </sphereBufferGeometry>

        <meshStandardMaterial
          metalness={0.93}
          roughness={0.1}
          attach="material"
          vertexColors={true}
        />
      </instancedMesh>

      <Floor
        shadowPosition={shadowPosition}
        shadowScale={shadowScale}
        shadowFar={shadowFar}
      />
    </group>
  );
};

export default Attractor;
