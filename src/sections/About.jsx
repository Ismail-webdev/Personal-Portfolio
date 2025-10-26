import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Globe, Code, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    {
      icon: GraduationCap,
      label: t("about.stats.education"),
      value: "M.Sc. IT",
      color: "text-blue-400",
    },
    {
      icon: Code,
      label: t("about.stats.experience"),
      value: "1+ Year",
      color: "text-green-400",
    },
    {
      icon: Globe,
      label: t("about.stats.goal"),
      value: t("about.stats.goalValue"),
      color: "text-purple-400",
    },
    {
      icon: Award,
      label: t("about.stats.projects"),
      value: "10+",
      color: "text-orange-400",
    },
  ];
  return (
    <section id="about" className="section-padding bg-primary-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div values={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("about.about_me")}
            </h2>
            <div className="w-24 h-1 bg-accent-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-primary-300 leading-relaxed">
                {t("about.about_description")}
              </p>

              <p className="text-lg text-primary-300 leading-relaxed">
                {t("about.about_journey")}
              </p>

              <p className="text-lg text-primary-300 leading-relaxed">
                {t("about.about_current")}
              </p>

              {/* Stats Grid */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 mt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-primary-800 rounded-lg"
                  >
                    <stat.icon
                      className={`w-8 h-8 mx-auto mb-2 ${stat.color}`}
                    />
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="max-w-sm w-80 h-96 bg-gradient-to-br from-accent-900/20 to-primary-900/20 rounded-2xl shadow-2xl border border-slate-700 p-8 relative overflow-hidden">
                  {/* Background circles */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-accent-800 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 bg-primary-800 rounded-full opacity-60"></div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                    {/* Image */}
                    <div className="w-30 h-30 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src="/profilepic.jpg"
                        alt={t("about.profileCard.imageAlt")}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <h2 className="text-2xl font-semibold  text-accent-600 mb-1">
                      Ismail Ali
                    </h2>
                    <h3 className="text-xl font-semibold text-slate-200 mb-2">
                      {t("about.profileCard.role")}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      {t("about.profileCard.skills")}
                    </p>

                    {/* Dots */}
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
