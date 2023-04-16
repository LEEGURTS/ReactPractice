import RotateText from "../components/ScrollEffect/RotateText";
import ScrollEffect from "../components/ScrollEffect/ScrollEffect";
import ModelViewer from "./../components/ThreeJs/ModelViewer";

const ThreeJsPage: React.FunctionComponent = () => {
  return (
    <div className="relative font-chosun text-black min-h-[100svh]  text-[16px] flex flex-col items-center">
      <div className="relative flex items-center justify-center w-screen h-screen">
        <RotateText barText="3D" className="absolute left-[20px]" />
        <RotateText barText="FRONTEND" className="absolute right-[20px]" />
        <p className="absolute font-pretendard font-bold z-0 text-[20vw]">
          SZSGN
        </p>
        <ModelViewer
          rotate="scroll"
          className=" w-full h-screen"
          scale={0.5}
          modelPath="3d/marbleBurst.glb"
        />
      </div>
      <div className="w-[80vw] border"></div>
      <ScrollEffect />
    </div>
  );
};

export default ThreeJsPage;
