import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaGit,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiWoo,
  SiFigma,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { Sparkles, TrendingUp } from "lucide-react";

const Skills = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      name: "HTML5",
      level: 95,
      color: "from-orange-500 to-orange-600",
      icon: <FaHtml5 />,
      category: "Frontend",
    },
    {
      name: "CSS3",
      level: 90,
      color: "from-blue-500 to-blue-600",
      icon: <FaCss3Alt />,
      category: "Frontend",
    },
    {
      name: "JavaScript",
      level: 85,
      color: "from-yellow-500 to-yellow-600",
      icon: <FaJs />,
      category: "Frontend",
    },
    {
      name: "React.js",
      level: 80,
      color: "from-cyan-500 to-cyan-600",
      icon: <FaReact />,
      category: "Framework",
    },
    {
      name: "WordPress",
      level: 85,
      color: "from-blue-700 to-blue-800",
      icon: <FaWordpress />,
      category: "CMS",
    },
    {
      name: "WooCommerce",
      level: 75,
      color: "from-purple-500 to-purple-600",
      icon: <SiWoo />,
      category: "E-commerce",
    },
    {
      name: "TailwindCSS",
      level: 90,
      color: "from-teal-500 to-teal-600",
      icon: <SiTailwindcss />,
      category: "Styling",
    },
    {
      name: "Figma",
      level: 80,
      color: "from-pink-500 to-pink-600",
      icon: <SiFigma />,
      category: "Design",
    },
    {
      name: "Git",
      level: 75,
      color: "from-gray-600 to-gray-700",
      icon: <FaGit />,
      category: "Tools",
    },
  ];

  const learningSkills = [
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-slate-700 to-slate-900",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-blue-600 to-blue-800",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="skills"
      className="section-padding bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), 
                           radial-gradient(circle at 80% 80%, #8b5cf6 0%, transparent 50%)`,
          }}
        />
      </div>

      <div classname="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("skills.title")}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t("skills.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="h-full bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-700 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex items-center justify-center text-2xl`}
                      >
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {skill.name}
                        </h3>
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                          {skill.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-400">
                        {t("skills.proficiency")}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-sm relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
