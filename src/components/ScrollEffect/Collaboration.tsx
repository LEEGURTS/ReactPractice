import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import PHOTO from "../../assets/Img/PHOTO.jpg";

const PhotoFull: React.FunctionComponent = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const height = useTransform(scrollYProgress, [0.2, 0.6], ["10vh", "50vh"]);

  return (
    <section className="">
      <div ref={targetRef} className="h-[100vh]">
        <div className="sticky top-[10vh]">
          <div className="flex justify-center">
            <motion.div style={{ height: height }} className="origin-top">
              <img src={PHOTO} className="h-full object-cover" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoFull;
