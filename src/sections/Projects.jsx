import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: t("projects.items.project1.title"),
      description: t("projects.items.project1.description"),
      technologies: ["React.js", "TailwindCSS", "Framer Motion"],
      github: "https://github.com/Ismail-webdev",
      demo: "#",
      image: "/project1.jpg",
    },
    {
      title: t("projects.items.project2.title"),
      description: t("projects.items.project2.description"),
      technologies: ["WordPress", "WooCommerce", "Elementor"],
      github: "#",
      demo: "#",
      image: "/project2.jpg",
    },
    {
      title: t("projects.items.project3.title"),
      description: t("projects.items.project3.description"),
      technologies: ["React.js", "JavaScript", "CSS3"],
      github: "https://github.com/Ismail-webdev",
      demo: "#",
      image: "/project3.jpg",
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

  return (
    <section id="projects" className="section-padding bg-primary-800">
      <div className="container-custom lg:px-0 px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("projects.title")}
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              {t("projects.subtitle")}
            </p>
            <div className="w-24 h-1 bg-accent-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-primary-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-700"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-accent-900/30 to-primary-700/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code size={64} className="text-primary-600 opacity-50" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-800 text-accent-400 text-sm rounded-md border border-primary-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-800 text-primary-300 rounded-lg hover:bg-accent-600 hover:text-white transition-colors duration-300 border border-primary-700"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">
                        {t("projects.viewCode")}
                      </span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">
                        {t("projects.viewDemo")}
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

