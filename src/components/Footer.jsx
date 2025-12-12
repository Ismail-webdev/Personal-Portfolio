import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Github,
  Linkedin,
  Mail,
  Globe,
  Palette,
  Code,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ismail-webdev", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ismailali082",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:ismailali.webdev@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: t("footer.links.about"), href: "#about" },
    { name: t("footer.links.skills"), href: "#skills" },
    { name: t("footer.links.projects"), href: "#projects" },
    { name: t("footer.links.experience"), href: "#experience" },
    { name: t("footer.links.contact"), href: "#contact" },
  ];

  const techCategories = [
    {
      icon: Code,
      title: t("footer.techCategories.frontend"),
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "TailwindCSS"],
    },
    {
      icon: Palette,
      title: t("footer.techCategories.design"),
      technologies: ["Figma", "Elementor", "WordPress", "Adobe XD"],
    },
    {
      icon: Globe,
      title: t("footer.techCategories.tools"),
      technologies: ["Git", "Chrome DevTools", "Vite", "VS Code"],
    },
  ];
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom lg:px-0 px-4">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-accent-400">Ismail Ali</h3>
              <p className="text-primary-300 leading-relaxed">
                {t("footer.aboutText")}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary-800 rounded-lg hover:bg-accent-600 transition-colors duration-300"
                  >
                    <social.icon
                      size={20}
                      className="text-primary-300 hover:text-white"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-accent-400">
                {t("footer.linkHeading")}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-300 hover:text-accent-400 transition-colors duration-300"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-accent-400">
                {t("footer.contactHeading")}
              </h4>
              <div className="space-y-2">
                <p className="text-primary-300">
                  <span className="font-medium">
                    {t("footer.contact.emailLabel")}
                  </span>{" "}
                  <a
                    href="mailto:ismailali.webdev@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    ismailali.webdev@gmail.com
                  </a>
                </p>
                <p className="text-primary-300">
                  <span className="font-medium">
                    {t("footer.contact.location")}
                  </span>{" "}
                  {t("footer.contact.locationtext")}
                </p>
                <p className="text-primary-300">
                  <span className="font-medium">
                    {t("footer.contact.status")}
                  </span>{" "}
                  {t("footer.contact.statustext")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-accent-400">
                {t("footer.techHeading")}
              </h4>
              <div className="space-y-3">
                {techCategories.map((category, index) => (
                  <div key={category.title} className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <category.icon size={16} className="text-accent-400" />
                      <span className="text-sm font-medium text-primary-200">
                        {category.title}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 ml-6">
                      {category.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary-800 text-primary-300 text-xs rounded-md hover:bg-accent-600 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-primary-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-400 text-sm font-medium">
              © {currentYear} {t("footer.copyright.name")}.{" "}
              {t("footer.copyright.rights")}
            </p>

            <div className="flex items-center space-x-2 text-primary-400 text-sm font-medium">
              <span>{t("footer.copyright.made")}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500" fill="currentColor" />
              </motion.div>
              <span>{t("footer.copyright.tech")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
