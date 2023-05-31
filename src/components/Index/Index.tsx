import IndexGridItem from "./IndexGridItem";
import THREEJS from "../../assets/Img/THREEJS.png";
import { motion } from "framer-motion";
const Index: React.FunctionComponent = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="font-chosun flex flex-col p-8 items-center w-screen min-h-[100svh]"
    >
      <h1 className="mt-[5em] text-[2em]">이것저것 만들어보는 연습장</h1>
      <motion.main className="w-full mt-[2em] max-w-[1440px] grid grid-cols-3 gap-[1em]">
        <IndexGridItem
          motionVariants={item}
          title="ThreeJs"
          description="ThreeJs 연습"
          image={THREEJS}
          link="/threejs"
        />
        <IndexGridItem
          motionVariants={item}
          title="KORENG 변환"
          description="한글을 영어로, 영어를 한글로"
          image={THREEJS}
          link="/koreng"
        />
      </motion.main>
    </motion.div>
  );
};

export default Index;
