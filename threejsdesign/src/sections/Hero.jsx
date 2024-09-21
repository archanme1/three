import { Canvas } from "@react-three/fiber";
import HackerRoom from "../../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../../components/CanvasLoader";
import { Leva, useControls } from "leva";
const Hero = () => {
  const x = useControls("HackerRoom", {
    positioX: {
      value: 2.5,
      min: -10,
      max: -10,
    },
    positioY: {
      value: 2.5,
      min: -10,
      max: -10,
    },
    positioZ: {
      value: 2.5,
      min: -10,
      max: -10,
    },
  });
  return (
    <section className="min-h-screen w-full  flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Archan <span className="waving-hand">✋🏼</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <perspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={0.01}
              position={[x.positioX, x.positioY, x.positioZ]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
