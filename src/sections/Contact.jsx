import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: "error",
        message: t("contact.form.error"),
      });
      return;
    }

    // In a real application, you would send this to a backend
    // For now, we'll use mailto as a fallback
    // Note: Field labels in mailto body are kept in English (technical standard)
    const mailtoLink = `mailto:ismailali.webdev@gmail.com?subject=${encodeURIComponent(
      formData.subject || t("contact.form.defaultSubject")
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    setFormStatus({
      type: "success",
      message: t("contact.form.success"),
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Clear status message after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: null, message: "" });
    }, 5000);
  };

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

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.emailLabel"),
      value: "ismailali.webdev@gmail.com",
      href: "mailto:ismailali.webdev@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.info.locationLabel"),
      value: t("contact.info.locationValue"),
    },
  ];

  return (
    <section id="contact" className="section-padding bg-primary-800">
      <div className="container-custom lg:px-0 px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-primary-300 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
            <div className="w-24 h-1 bg-accent-600 mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t("contact.info.title")}
                </h3>
                <p className="text-primary-300 mb-8 leading-relaxed">
                  {t("contact.info.description")}
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 bg-primary-900 rounded-lg border border-primary-700 hover:border-accent-600 transition-all duration-300"
                  >
                    <div className="p-3 bg-accent-600 rounded-lg">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-primary-400 text-sm mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-white hover:text-accent-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-white font-medium mb-2"
                  >
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    placeholder={t("contact.form.subjectPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-medium mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300 resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                    required
                  />
                </div>

                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 p-4 rounded-lg ${
                      formStatus.type === "success"
                        ? "bg-green-900/30 border border-green-700 text-green-300"
                        : "bg-red-900/30 border border-red-700 text-red-300"
                    }`}
                  >
                    {formStatus.type === "success" ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span className="text-sm">{formStatus.message}</span>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  {t("contact.form.submit")}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

