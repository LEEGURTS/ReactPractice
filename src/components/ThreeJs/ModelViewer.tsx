import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  className?: string;
  rotate?: string;
}

const ModelViewer: React.FunctionComponent<ModelViewerProps> = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  className,
  rotate,
}) => {
  return (
    <div className={"relative h-[30svh] " + className}>
      <Canvas
        camera={{
          fov: 30,
          position: [0, 0.5, 1],
        }}
      >
        <ambientLight intensity={0.3} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <GltfModel
            rotate={rotate}
            modelPath={modelPath}
            scale={scale}
            position={position}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
