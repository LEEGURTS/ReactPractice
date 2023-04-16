import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

interface GltfModelProps {
  modelPath: string;
  rotate?: string;
  rotateSpeed?: number;
  scale?: number;
  position?: [number, number, number];
}

const GltfModel: React.FunctionComponent<GltfModelProps> = ({
  modelPath,
  rotate = "auto",
  rotateSpeed = 0.01,
  scale = 1,
  position = [0, 0, 0],
}) => {
  const ref = useRef<any>();
  const gltf = useGLTF(modelPath);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (rotate === "scroll") {
      ref.current.rotation.y = window.scrollY * rotateSpeed;
    } else if (rotate === "auto") {
      ref.current.rotation.y += rotateSpeed;
    }
    state.camera.lookAt(0, 0.1, 0);
  });
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={scale}
        position={position}
      />
    </>
  );
};

export default GltfModel;
