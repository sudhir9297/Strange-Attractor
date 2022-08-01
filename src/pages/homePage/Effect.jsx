import React from "react";
import {
  Sky,
  Environment,
  Effects as EffectComposer,
  useTexture,
} from "@react-three/drei";
import { SSAOPass } from "three-stdlib";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
extend({ SSAOPass });
function Effect() {
  const { scene, camera } = useThree();
  return (
    <EffectComposer>
      <sSAOPass
        args={[scene, camera, 100, 100]}
        kernelRadius={1.2}
        kernelSize={0}
      />
    </EffectComposer>
  );
}

export default Effect;
