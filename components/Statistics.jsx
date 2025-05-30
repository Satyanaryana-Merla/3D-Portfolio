import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { statistics } from "@/constants";

function StatCard({ stat, index }) {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.5)}
      className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105"
    >
      <div className="text-4xl mb-3">{stat.icon}</div>
      <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
      <p className="text-lg font-semibold text-gray-300 mb-2">{stat.label}</p>
      <p className="text-sm text-gray-400">{stat.description}</p>
    </motion.div>
  );
}

function Statistics() {
  return (
    <section className="relative z-0 paddingX paddingY" id="stats">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mb-12"
      >
        <p className="sectionSubText">Impact & Achievements</p>
        <h2 className="sectionHeadText">Numbers That Matter.</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {statistics.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-12 text-center"
      >
        <p className="text-gray-400 text-lg italic">
          "Turning data into decisions, one pipeline at a time"
        </p>
      </motion.div>
    </section>
  );
}

export default Statistics; 