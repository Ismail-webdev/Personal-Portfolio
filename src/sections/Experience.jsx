import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: t("experience.items.exp1.title"),
      company: "Appiesoft Web Solutions", // Company name - not translated
      location: t("experience.items.exp1.location"),
      period: t("experience.items.exp1.period"),
      description: t("experience.items.exp1.description"),
      responsibilities: [
        t("experience.items.exp1.responsibility1"),
        t("experience.items.exp1.responsibility2"),
        t("experience.items.exp1.responsibility3"),
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-primary-900">
      <div className="container-custom lg:px-0 px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("experience.title")}
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              {t("experience.subtitle")}
            </p>
            <div className="w-24 h-1 bg-accent-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-700 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 bg-accent-600 rounded-full border-4 border-primary-900 hidden md:block z-10" />

                  <div className="bg-primary-800 rounded-xl p-6 md:p-8 shadow-lg border border-primary-700 hover:border-accent-600 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-accent-400 font-semibold mb-2">
                          <Briefcase size={18} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
                        <div className="flex items-center gap-2 text-primary-300">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-primary-300">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-primary-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {t("experience.keyResponsibilities")}
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-primary-300"
                          >
                            <span className="text-accent-400 mt-1.5">▸</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

