import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ScrollEffect: React.FunctionComponent = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const left = useTransform(scrollYProgress, [0.3, 0.7], ["-100%", "0%"]);
  const right = useTransform(scrollYProgress, [0.5, 0.9], ["100%", "0%"]);

  return (
    <motion.section
      style={{ opacity }}
      ref={targetRef}
      className="relative mb-[8rem] text-[16px] w-screen py-16 text-black flex flex-col items-center"
    >
      <motion.div
        style={{ scale, translateX: "50%", x: "-50%" }}
        className="flex flex-col items-center"
      >
        <p className="text-[2em] font-light">First Page With</p>
        <p className="text-[3em]">Three Js</p>
      </motion.div>
      <motion.div className="w-screen px-[40px] py-[10vh] flex flex-col">
        <motion.div style={{ x: left }}>
          <h1 className="font-bold font-pretendard text-[3em]">Scheherazade</h1>
          <p className="whitespace-pre-line w-[80%]">
            Scheherazade, also commonly Sheherazade (Russian: Шехеразада, tr.
            Shekherazada, IPA: [ʂɨxʲɪrɐˈzadə]), Op. 35, is a symphonic suite
            composed by Nikolai Rimsky-Korsakov in 1888 and based on One
            Thousand and One Nights (also known as The Arabian Nights).[1] This
            orchestral work combines two features typical of Russian music in
            general and of Rimsky-Korsakov in particular: dazzling, colorful
            orchestration and an interest in the East, which figured greatly in
            the history of Imperial Russia, as well as orientalism in general.
            The name "Scheherazade" refers to the main character Scheherazade of
            the One Thousand and One Nights. It is one of Rimsky-Korsakov's most
            popular works.
          </p>
        </motion.div>
        <motion.div
          className="text-right flex flex-col items-end mt-[20vh]"
          style={{ x: right }}
        >
          <h1 className="font-bold font-pretendard text-[3em]">LEEGUTS</h1>
          <p className="whitespace-pre-line w-[80%]">
            LEEGUTS. THREEJS를 이용한 3D 웹페이지 제작. 2023.04.17. 찍먹해보려다
            엄청난 난이도에 고통받는중. 카메라 앵글은 뭐 이리 복잡하며
            알아야할게 많은지 고민중이다. React, Framer-motion, TypeScript,
            HTML,CSS,Javascript, Web-audio 등을 사용할줄 안다.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ScrollEffect;
