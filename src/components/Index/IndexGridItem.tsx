import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface IndexGridItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  motionVariants?: any;
}

const IndexGridItem: React.FunctionComponent<IndexGridItemProps> = ({
  title,
  description,
  image,
  link,
  motionVariants,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      variants={motionVariants}
      className="flex flex-col items-center"
    >
      <img
        alt=""
        src={image}
        className="border object-cover cursor-pointer drop-shadow-xl hover:opacity-80 hover:scale-105 duration-300"
        onClick={() => navigate(link)}
      ></img>
      <h1 className="mt-[1em] text-[1.5em]">{title}</h1>
      <p className="">{description}</p>
    </motion.div>
  );
};

export default IndexGridItem;
