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
      color: "from-orange-500 to-orange-600",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS3",
      color: "from-blue-500 to-blue-600",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      color: "from-yellow-500 to-yellow-600",
      icon: <FaJs />,
    },
    {
      name: "React.js",
      color: "from-cyan-500 to-cyan-600",
      icon: <FaReact />,
    },
    {
      name: "WordPress",
      color: "from-blue-700 to-blue-800",
      icon: <FaWordpress />,
    },
    {
      name: "WooCommerce",
      color: "from-purple-500 to-purple-600",
      icon: <SiWoo />,
    },
    {
      name: "TailwindCSS",
      color: "from-teal-500 to-teal-600",
      icon: <SiTailwindcss />,
    },
    {
      name: "Figma",
      color: "from-pink-500 to-pink-600",
      icon: <SiFigma />,
    },
    {
      name: "Git",
      color: "from-gray-600 to-gray-700",
      icon: <FaGit />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />,
      color: "from-amber-500 to-orange-500",
      learning: true,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "from-emerald-500 to-teal-500",
      learning: true,
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

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              {t("skills.title")}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {t("skills.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.08,
                  rotate: [0, -5, 5, 0]
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="h-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-300 flex items-center justify-center relative">
                  {/* Learning Badge */}
                  {skill.learning && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.3 }}
                      className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10"
                    >
                      Learning
                    </motion.div>
                  )}
                  
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={
                      isInView 
                        ? { scale: 1, rotate: 0 } 
                        : { scale: 0, rotate: -180 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.05,
                    }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${skill.color} text-white shadow-lg group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-5xl relative overflow-hidden`}
                  >
                    {/* Animated shimmer effect */}
                    <motion.div
                      animate={{
                        x: ["-200%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                    
                    {/* Icon */}
                    <span className="relative z-10">{skill.icon}</span>
                  </motion.div>
                </div>

                {/* Tooltip on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-700 text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20"
                >
                  {skill.name}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-slate-700 rotate-45"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;