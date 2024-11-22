import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

function ServiceCard({ index, title, icon }) {
  return (
    <Tilt className="w-full h-full" tiltMaxAngleX="10" tiltMaxAngleY="10">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[18px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="dark:bg-bgSecondaryDark bg-bgSecondaryLight rounded-[20px] py-5 px-12 min-h-[280px] h-full flex justify-evenly items-center flex-col"
        >
          <div className="w-16 h-16 object-contain relative">{icon}</div>
          <h3 className="dark:text-ctnPrimaryDark text-ctnPrimaryLight text-lg lg:text-xl font-bold text-center w-full md:w-[80%]">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
