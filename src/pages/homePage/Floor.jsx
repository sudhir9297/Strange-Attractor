import React, { useRef } from "react";
import {
  useTexture,
  Reflector,
  ContactShadows,
  BakeShadows,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";

// import roughnessMap from "../../constants/assets/roughness_floor.jpeg";
// import normalMap from "../../constants/assets/normal_floor.jpeg";

function FloorContent({ shadowPosition }) {
  // const [floor, normal] = useTexture([roughnessMap, normalMap]);
  const contactShadow = useRef();
  useHelper(false && contactShadow, THREE.BoxHelper, "red");

  return (
    <group>
      <ContactShadows
        ref={contactShadow}
        opacity={1}
        scale={[500, 500]}
        blur={1}
        far={30}
        position={shadowPosition}
        resolution={1024}
        frames={1}
      />
      {/* <axesHelper scale={20} /> */}
      <BakeShadows />
    </group>
  );
}

export default FloorContent;
