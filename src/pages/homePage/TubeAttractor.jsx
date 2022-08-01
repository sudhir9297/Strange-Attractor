import React from "react";
import { Tube } from "@react-three/drei";
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
    shadowScale,
    shadowFar,
  },
}) => {
  const points = func(state);

  var newPoints = [];
  for (var i = 0; i < points.length; i++) {
    newPoints.push(new THREE.Vector3(points[i][0], points[i][1], points[i][2]));
  }
  var curve = new THREE.CatmullRomCurve3(newPoints);

  return (
    <group position={groupPosition}>
      <Tube
        args={[curve, 20000, state.size, 10, false]}
        rotation={structuredRotation}
        position={structuredPosition}
      >
        <meshStandardMaterial
          metalness={0.93}
          roughness={0.1}
          attach="material"
          color={"#B76E79"}
        />
      </Tube>
      <Floor
        shadowPosition={shadowPosition}
        shadowScale={shadowScale}
        shadowFar={shadowFar}
      />
    </group>
  );
};

export default Attractor;
