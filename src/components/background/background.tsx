import { useCallback } from "react";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function StarBackground() {
  const star = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      id="stars"
      init={star}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      options={{
        preset: "stars",
        background: {
          color: {
            value: "transparent", // transparent so it blends in
          },
        },
        fullScreen: {
          enable: false, // disable fullscreen so it's only inside its container
        },
      }}
    />
  );
}
