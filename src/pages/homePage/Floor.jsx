import React, { useRef } from "react";
import { ContactShadows, BakeShadows, useHelper } from "@react-three/drei";
import * as THREE from "three";

function FloorContent({ shadowPosition, shadowScale, shadowFar }) {
  const contactShadow = useRef();
  useHelper(false && contactShadow, THREE.BoxHelper, "red");

  return (
    <group>
      <ContactShadows
        ref={contactShadow}
        opacity={1}
        scale={[shadowScale, shadowScale]}
        blur={1}
        far={shadowFar ? shadowFar : 10}
        near={0.1}
        position={shadowPosition}
        resolution={2048}
        frames={1}
      />

      {/* <axesHelper scale={20} /> */}
      <BakeShadows />
    </group>
  );
}

export default FloorContent;
