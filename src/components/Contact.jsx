import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT_DATA } from "../constants/contact";

// Map social keys → icons
const SOCIAL_ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    } catch (error) {
      console.error("Email error:", error);
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-20 lg:py-28 px-5 sm:px-8 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Have a project in mind, want to collaborate, or simply say hello?
            Let's build something amazing together.
          </p>

          <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {CONTACT_DATA.heading}
            </h3>

            <p className="text-gray-400 leading-relaxed text-base mb-10">
              {CONTACT_DATA.description}
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Mail className="text-purple-400" size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <Phone className="text-purple-400" size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href={`tel:${CONTACT_DATA.phone}`}
                    className="hover:text-purple-400 transition-colors"
                  >
                    {CONTACT_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <MapPin className="text-purple-400" size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p>{CONTACT_DATA.location}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10">
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                Follow Me
              </h4>

              <div className="flex gap-4">
                {Object.entries(CONTACT_DATA.socialLinks).map(([key, url]) => {
                  const Icon = SOCIAL_ICON_MAP[key];
                  if (!Icon) return null;

                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                    >
                      <Icon
                        size={20}
                        className="group-hover:text-purple-400 transition-colors"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-800/40 backdrop-blur-xl border border-purple-500/20 shadow-xl"
            >

              <div className="grid sm:grid-cols-2 gap-5 mb-5">

                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-400">
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 outline-none transition-all"
                  />
                </div>

              </div>

              <div className="mb-5">
                <label className="block mb-2 text-sm text-gray-400">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700 focus:border-purple-500 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-center mt-4 text-green-400">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-center mt-4 text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>


  );
}
