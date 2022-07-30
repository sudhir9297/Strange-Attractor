import React from "react";

import {
  EffectComposer,
  SSR,
  ToneMapping,
  Bloom,
} from "@react-three/postprocessing";
import { useControls } from "leva";

export default function Effect() {
  const { enabled, ...props } = useControls({
    enabled: true,
    temporalResolve: true,
    STRETCH_MISSED_RAYS: true,
    USE_MRT: true,
    USE_NORMALMAP: true,
    USE_ROUGHNESSMAP: true,
    ENABLE_JITTERING: true,
    ENABLE_BLUR: true,
    DITHERING: false,
    temporalResolveMix: { value: 0.9, min: 0, max: 1 },
    temporalResolveCorrectionMix: { value: 0.4, min: 0, max: 1 },
    maxSamples: { value: 0, min: 0, max: 1 },
    resolutionScale: { value: 1, min: 0, max: 1 },
    blurMix: { value: 0.2, min: 0, max: 1 },
    blurKernelSize: { value: 8, min: 0, max: 8 },
    blurSharpness: { value: 0.5, min: 0, max: 1 },
    rayStep: { value: 0.5, min: 0, max: 1 },
    intensity: { value: 2.5, min: 0, max: 5 },
    maxRoughness: { value: 1, min: 0, max: 1 },
    jitter: { value: 0.3, min: 0, max: 5 },
    jitterSpread: { value: 0.25, min: 0, max: 1 },
    jitterRough: { value: 0.1, min: 0, max: 1 },
    roughnessFadeOut: { value: 1, min: 0, max: 1 },
    rayFadeOut: { value: 0, min: 0, max: 1 },
    MAX_STEPS: { value: 20, min: 0, max: 20 },
    NUM_BINARY_SEARCH_STEPS: { value: 6, min: 0, max: 10 },
    maxDepthDifference: { value: 5, min: 0, max: 10 },
    maxDepth: { value: 1, min: 0, max: 1 },
    thickness: { value: 3, min: 0, max: 10 },
    ior: { value: 1.45, min: 0, max: 2 },
  });

  return (
    <EffectComposer disableNormalPass>
      {/* <SSR {...props} /> */}
      {/* <Bloom
        luminanceThreshold={0.2}
        mipmapBlur
        luminanceSmoothing={0}
        intensity={1.75}
      />
      <Bloom
        luminanceThreshold={1}
        mipmapBlur
        luminanceSmoothing={0.0}
        levels={5}
        radius={0.85}
        intensity={2}
      /> */}
      {/* <ToneMapping
        blendFunction={1} // blend mode
        adaptive={false} // toggle adaptive luminance map usage
        resolution={256} // texture resolution of the luminance map
        middleGrey={0.6} // middle grey factor
        maxLuminance={16.0} // maximum luminance
        averageLuminance={1.0} // average luminance
        adaptationRate={2.0} // luminance adaptation rate
      /> */}
    </EffectComposer>
  );
}
