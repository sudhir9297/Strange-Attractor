import React, { useRef, useEffect, useMemo, Suspense, useState } from "react";
import { useControls } from "leva";
import { extend } from "@react-three/fiber";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import * as THREE from "three";

import { Tube, useHelper } from "@react-three/drei";

extend({ RoundedBoxGeometry });

const Attractor = ({
  attractorData: {
    data: { menuData, state },
    func,
  },
  useUiMenu,
}) => {
  // let data = useControls({ ...menuData }, [menuData]);

  //   if (!useUiMenu) {
  //     const useStore = createStrore(() => state);
  //     data = useStore.getState();
  //   }

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
    size: { value: 0.33, min: 0, max: 1, step: 0.01 },
    color: "#C784AF",
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
      rotation={[-1.5708, 0, 0]}
    >
      {/* <roundedBoxGeometry
        receiveShadow
        args={[size * s, size * s, size * s, 1, 0.075]}
      /> */}
      <sphereBufferGeometry args={[size]} castShadow receiveShadow>
        <instancedBufferAttribute />
      </sphereBufferGeometry>
      <meshStandardMaterial {...props} attach="material" />
    </instancedMesh>
  );

  //   let data = {};
  //   data = useControls({ ...menuData }, [menuData]);

  //   var newPoints = [];
  //   const points = func(data);

  //   for (var i = 0; i < points.length; i++) {
  //     newPoints.push(new THREE.Vector3(points[i][0], points[i][1], points[i][2]));
  //   }
  //   //   useEffect(() => {
  //   //     // let data = useControls({ ...menuData }, [menuData]);
  //   //   }, [data]);

  //   var curve = new THREE.CatmullRomCurve3(newPoints);

  //   const { segment, radius, crossSection, ...argsVal } = useControls({
  //     segment: { value: 20000, min: 1000, max: 50000 },
  //     radius: { value: 0.2, min: 0, max: 5, step: 0.1 },
  //     crossSection: { value: 10, min: 0, max: 20, step: 1 },
  //     color: "#FFD700",
  //     metalness: { value: 0.9, min: 0, max: 1 },
  //     roughness: { value: 0.07, min: 0, max: 1 },
  //   });

  //   const mesh = useRef();
  //   useHelper(mesh, THREE.BoxHelper, "cyan");

  //   return (
  //     <Tube
  //       args={[curve, segment, radius, crossSection, false]}
  //       rotation={[-1.5708, 0, 0]}
  //     >
  //       <axesHelper scale={10} />
  //       <meshStandardMaterial {...argsVal} attach="material" />
  //     </Tube>
  //   );
};

export default Attractor;
