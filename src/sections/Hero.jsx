import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChilderen: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleHireMe = () => {
    window.location.href =
      "mailto:ismailali.webdev@gmail.com?subject=Hire Ismail Ali - Frontend Developer";
  };
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* background elements */}
      {/* floating element */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-800 rounded-full opacity-20 animate-bounce-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-700 rounded-full opacity-20 animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      />
      <div className="relative inset-0 from-accent-900/20 to-primary-900/20">
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent-700 rounded-full opacity-30 animate-bounce-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto py-20 px-5 md:px-0"
          >
            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-accent-400 font-medium text-lg">
                {t("hero.greeting")}
              </span>
            </motion.div>

            {/* Intro */}
            <motion.h1
              values={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Ismail Ali
            </motion.h1>

            {/* Role */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl md:text-3xl text-primary-300 font-medium">
                {t("hero.role")}
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-primary-400 mb-8 max-w-1xl mx-auto leading-relaxed"
            >
              {t("hero.tagline")}
            </motion.p>

            {/* cta btns */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleHireMe}
                className="btn-primary text-lg px-8 py-4"
              >
                <Mail className="inline-block mr-2" size={20} />
                {t("hero.hireMe")}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                <Download className="inline-block mr-2" size={20} />
                {t("hero.downloadCV")}
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Ismail-webdev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-300 hover:text-accent-400"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://linkedin.com/in/ismailali082"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-primary-300 hover:text-accent-400"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
