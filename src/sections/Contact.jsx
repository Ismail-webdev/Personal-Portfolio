import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

// NEW imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validation/contactSchema";

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // keeps your existing success / error message UI
  const [formStatus, setFormStatus] = useState({
    type: null,
    message: "",
  });

  // NEW — React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  // NEW — Submit to serverless function
  const onSubmit = async (data) => {
    setFormStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormStatus({
          type: "success",
          message: t("contact.form.success"),
        });
        reset();
      } else {
        setFormStatus({
          type: "error",
          message: t("contact.form.error"),
        });
      }
    } catch (err) {
      setFormStatus({
        type: "error",
        message: t("contact.form.error"),
      });
    }

    setTimeout(() => {
      setFormStatus({ type: null, message: "" });
    }, 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
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
            {/* Contact Info */}
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300"
                    placeholder={t("contact.form.subjectPlaceholder")}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-medium mb-2">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={6}
                    {...register("message")}
                    className="w-full px-4 py-3 bg-primary-900 border border-primary-700 rounded-lg text-white placeholder-primary-400 focus:outline-none focus:border-accent-600 transition-colors duration-300 resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Success / Error Box */}
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

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg"
                >
                  <Send size={20} />
                  {isSubmitting
                    ? t("contact.form.sending")
                    : t("contact.form.submit")}
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
