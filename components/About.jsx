import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div className="space-y-4">
          <p className="font-semibold text-white text-xl">
            Data Engineer at Vector ML Analytics | Building Scalable Data Solutions
          </p>
          
          <p>
            As a <span className="text-primary font-semibold">Data Engineer at Vector ML Analytics</span>, I architect robust data pipelines and optimize large-scale data operations. With <span className="text-primary font-semibold">2+ years of experience</span> in data science and ML engineering, I've successfully delivered solutions processing 100GB+ daily data streams and saving organizations over $545K through automation and optimization.
          </p>

          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <p className="font-semibold text-white mb-2">Current Role Highlights:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Architecting ETL pipelines using AWS Glue, Lambda, and S3 for 100GB+ daily data</li>
              <li>Implementing real-time data integration with Plaid API for 10K+ users</li>
              <li>Optimizing PostgreSQL databases, reducing query time by 65%</li>
              <li>Building automated data quality frameworks with 99% anomaly detection</li>
              <li>Leading cloud migration initiatives, saving $15K/month in infrastructure</li>
            </ul>
          </div>

          <p>
            My expertise spans <span className="text-primary font-semibold">machine learning, data engineering, and AI solutions</span>. I've developed ML models with 94%+ accuracy, built NLP pipelines for 500K+ records, and created computer vision systems for medical diagnostics. Previously delivered impactful solutions as a Data Scientist at Trysol Global and through freelance engagements on Upwork (Top Rated) and Freelancer.
          </p>

          <p className="italic text-primary">
            "I transform complex data challenges into scalable, production-ready solutions that drive real business value. Let's discuss how I can help your organization leverage data for competitive advantage!"
          </p>
        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:merlasatyanarayana123@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            merlasatyanarayana123@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/Satyanarayana.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
