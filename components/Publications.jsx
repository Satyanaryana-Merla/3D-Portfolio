import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/utils/motion";
import { publications } from "@/constants";

function PublicationCard({ publication, index }) {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{publication.title}</h3>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold">{publication.journal}</span> • {publication.date}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-primary font-bold">{publication.citations}</span>
          <span className="text-gray-500 text-xs">Citations</span>
        </div>
      </div>

      <p className="text-gray-300 mb-4">{publication.description}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-green-400 font-semibold">
          {publication.impact}
        </span>
        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-white transition-colors duration-200 font-semibold text-sm"
        >
          View Publication →
        </a>
      </div>
    </motion.div>
  );
}

function Publications() {
  return (
    <section className="relative z-0 paddingX paddingY" id="publications">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="sectionSubText">Research & Innovation</p>
        <h2 className="sectionHeadText">Publications.</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 max-w-7xl mx-auto"
      >
        {publications.map((publication, index) => (
          <PublicationCard
            key={publication.title}
            publication={publication}
            index={index}
          />
        ))}
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-10 p-6 bg-tertiary/20 rounded-xl border border-primary/10"
      >
        <p className="text-gray-400 text-center">
          <span className="text-primary font-semibold">Research Focus:</span> Machine Learning applications in Agriculture, Healthcare, and Business Intelligence
        </p>
      </motion.div>
    </section>
  );
}

export default Publications; 