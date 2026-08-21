import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageCircle,
  Clock3,
  Terminal,
} from "lucide-react";
import emailjs from "@emailjs/browser";

import { CONTACT_DATA } from "../constants/contact";

// =====================================================
// DESIGN TOKENS
// =====================================================

const ACCENT = "#01c16a";
const BACKGROUND = "#111827";

// =====================================================
// SOCIAL ICON MAP
// =====================================================

const SOCIAL_ICON_MAP = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
};

// =====================================================
// ANIMATION
// =====================================================

const reveal = (delay = 0, axis = "y", distance = 30) => ({
  initial: {
    opacity: 0,
    [axis]: distance,
  },

  whileInView: {
    opacity: 1,
    [axis]: 0,
  },

  viewport: {
    once: true,
    amount: 0.12,
  },

  transition: {
    duration: 0.7,
    delay,
    ease: [0.16, 1, 0.3, 1],
  },
});

// =====================================================
// CONTACT ITEM
// =====================================================

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <>
      {/* Icon */}
      <div
        className="
          relative
          flex
          h-11
          w-11
          flex-shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          transition-all
          duration-300
          group-hover:border-[#01c16a]/30
          group-hover:bg-[#01c16a]/[0.07]
        "
      >
        <Icon
          size={17}
          strokeWidth={1.7}
          className="
            text-[#01c16a]/60
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:text-[#01c16a]
          "
        />

        <span
          className="
            absolute
            inset-0
            rounded-xl
            bg-[#01c16a]/[0.06]
            opacity-0
            blur-xl
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
        />
      </div>

      {/* Content */}
      <div className="min-w-0">
        <p
          className="
            mb-1
            text-[8px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-white/25
          "
        >
          {label}
        </p>

        <p
          className="
            truncate
            text-sm
            font-medium
            text-white/50
            transition-colors
            duration-300
            group-hover:text-white/85
          "
        >
          {value}
        </p>
      </div>

      {/* Arrow */}
      {href && (
        <ArrowUpRight
          size={14}
          className="
            ml-auto
            flex-shrink-0
            text-white/15
            transition-all
            duration-300
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            group-hover:text-[#01c16a]
          "
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="
          group
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-transparent
          p-2.5
          transition-all
          duration-300
          hover:border-[#01c16a]/10
          hover:bg-[#01c16a]/[0.025]
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="
        group
        flex
        items-center
        gap-3
        rounded-2xl
        border
        border-transparent
        p-2.5
      "
    >
      {content}
    </div>
  );
}

// =====================================================
// FLOATING ORB
// =====================================================

function FloatingOrb({ className, delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
        x: [0, 5, 0],
      }}
      transition={{
        duration: 6,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

// =====================================================
// CONTACT
// =====================================================

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ===================================================
  // FORM HANDLER
  // ===================================================

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [id]: value,
    }));
  };

  // ===================================================
  // SUBMIT
  // ===================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === "sending") return;

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

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 5000);
    } catch (error) {
      console.error("Email error:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#111827]
        px-6
        py-24
        text-white
        sm:px-8
        lg:px-10
        lg:py-32
      "
    >
      {/* =================================================
          AMBIENT BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Left green glow */}
        <FloatingOrb
          delay={0}
          className="
            left-[-14%]
            top-[15%]
            h-[420px]
            w-[420px]
            bg-[#01c16a]/[0.07]
          "
        />

        {/* Right green glow */}
        <FloatingOrb
          delay={1.5}
          className="
            right-[-12%]
            bottom-[5%]
            h-[420px]
            w-[420px]
            bg-[#01c16a]/[0.045]
          "
        />

        {/* Center subtle glow */}
        <FloatingOrb
          delay={3}
          className="
            left-[42%]
            top-[40%]
            h-[300px]
            w-[300px]
            bg-[#01c16a]/[0.025]
          "
        />
      </div>

      {/* =================================================
          ENGINEERING GRID
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 80%)",
        }}
      />

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          {...reveal()}
          className="mb-16 text-center lg:mb-20"
        >
          {/* Label */}

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#01c16a]/70" />

            <span
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.32em]
                text-[#01c16a]
              "
            >
              Let's Connect
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#01c16a]/70" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-[clamp(2.5rem,5vw,4rem)]
              font-bold
              leading-none
              tracking-[-0.055em]
              text-white
            "
          >
            Let's build something{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#01c16a]
                via-[#32d98a]
                to-[#8affc4]
                bg-clip-text
                text-transparent
              "
            >
              great.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-white/40
              sm:text-[15px]
            "
          >
            Have an opportunity, a project idea, or just want to
            talk engineering? My inbox is always open.
          </p>

          {/* Accent */}

          <div
            className="
              mx-auto
              mt-7
              h-[2px]
              w-16
              rounded-full
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, #01c16a, transparent)",
            }}
          />
        </motion.div>

        {/* =================================================
            MAIN CONTACT GRID
        ================================================= */}

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">

          {/* =================================================
              LEFT PANEL
          ================================================= */}

          <motion.div
            {...reveal(0.08, "x", -35)}
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-white/[0.07]
              bg-[#0d1624]/80
              p-6
              backdrop-blur-xl
              sm:p-8
            "
          >
            {/* Top accent */}

            <div
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-[#01c16a]/60
                to-transparent
              "
            />

            {/* Corner glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-[#01c16a]/[0.06]
                blur-3xl
              "
            />

            <div className="relative">

              {/* Intro */}

              <div className="mb-9">
                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-[#01c16a]/15
                    bg-[#01c16a]/[0.07]
                  "
                >
                  <MessageCircle
                    size={20}
                    strokeWidth={1.6}
                    className="text-[#01c16a]"
                  />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    tracking-[-0.03em]
                    text-white/90
                  "
                >
                  {CONTACT_DATA.heading}
                </h3>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-sm
                    leading-7
                    text-white/40
                  "
                >
                  {CONTACT_DATA.description}
                </p>
              </div>

              {/* Contact details */}

              <div className="space-y-1">
                <ContactItem
                  icon={Mail}
                  label="Email"
                  value={CONTACT_DATA.email}
                  href={`mailto:${CONTACT_DATA.email}`}
                />

                {CONTACT_DATA.phone && (
                  <ContactItem
                    icon={Phone}
                    label="Phone"
                    value={CONTACT_DATA.phone}
                    href={`tel:${CONTACT_DATA.phone}`}
                  />
                )}

                <ContactItem
                  icon={MapPin}
                  label="Location"
                  value={CONTACT_DATA.location}
                />
              </div>

              {/* Divider */}

              <div className="my-8 h-px bg-white/[0.06]" />

              {/* Socials */}

              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.22em]
                      text-white/25
                    "
                  >
                    Socials
                  </span>

                  <span className="h-px w-8 bg-white/[0.07]" />
                </div>

                <div className="flex gap-2.5">
                  {Object.entries(
                    CONTACT_DATA.socialLinks || {}
                  ).map(([key, url]) => {
                    const Icon = SOCIAL_ICON_MAP[key];

                    if (!Icon || !url) return null;

                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={key}
                        className="
                          group
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-white/[0.025]
                          text-white/30
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[#01c16a]/25
                          hover:bg-[#01c16a]/[0.07]
                          hover:text-[#01c16a]
                        "
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.7}
                          className="
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          "
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>

          {/* =================================================
              RIGHT — FORM
          ================================================= */}

          <motion.div
            {...reveal(0.15, "x", 35)}
            className="relative"
          >
            <form
              onSubmit={handleSubmit}
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.08]
                bg-[#0d1624]/90
                p-6
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                sm:p-8
                lg:p-10
              "
            >
              {/* Top line */}

              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#01c16a]/70
                  to-transparent
                "
              />

              {/* Corner glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-28
                  -top-28
                  h-64
                  w-64
                  rounded-full
                  bg-[#01c16a]/[0.035]
                  blur-3xl
                "
              />

              {/* Form header */}

              <div className="relative mb-8 flex items-start justify-between gap-5">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Terminal
                      size={13}
                      className="text-[#01c16a]/70"
                    />

                    <span
                      className="
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-white/25
                      "
                    >
                      New Message
                    </span>
                  </div>

                  <h3
                    className="
                      text-xl
                      font-bold
                      tracking-[-0.025em]
                      text-white/90
                    "
                  >
                    Tell me about it.
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-white/30
                    "
                  >
                    Fill in the details and I'll get back to you.
                  </p>
                </div>

                <div
                  className="
                    hidden
                    rounded-xl
                    border
                    border-[#01c16a]/10
                    bg-[#01c16a]/[0.035]
                    px-3
                    py-2
                    sm:block
                  "
                >
                  <span
                    className="
                      text-[8px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#01c16a]/70
                    "
                  >
                    Open
                  </span>
                </div>
              </div>

              {/* =================================================
                  NAME + EMAIL
              ================================================= */}

              <div className="mb-5 grid gap-4 sm:grid-cols-2">

                {/* Name */}

                <div>
                  <label
                    htmlFor="name"
                    className="
                      mb-2
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-[#080f1a]/80
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-white/15
                      focus:border-[#01c16a]/40
                      focus:bg-[#080f1a]
                      focus:ring-2
                      focus:ring-[#01c16a]/[0.08]
                    "
                  />
                </div>

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                      mb-2
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-[#080f1a]/80
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      transition-all
                      duration-300
                      placeholder:text-white/15
                      focus:border-[#01c16a]/40
                      focus:bg-[#080f1a]
                      focus:ring-2
                      focus:ring-[#01c16a]/[0.08]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  SUBJECT
              ================================================= */}

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="
                    mb-2
                    block
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/30
                  "
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  minLength={3}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-[#080f1a]/80
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/15
                    focus:border-[#01c16a]/40
                    focus:bg-[#080f1a]
                    focus:ring-2
                    focus:ring-[#01c16a]/[0.08]
                  "
                />
              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div className="mb-6">
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="
                      block
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white/30
                    "
                  >
                    Message
                  </label>

                  <span className="text-[8px] text-white/15">
                    {formData.message.length}/1000
                  </span>
                </div>

                <textarea
                  id="message"
                  rows={6}
                  maxLength={1000}
                  placeholder="Tell me a little about your project, opportunity, or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  className="
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-white/[0.07]
                    bg-[#080f1a]/80
                    px-4
                    py-3.5
                    text-sm
                    leading-6
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    placeholder:text-white/15
                    focus:border-[#01c16a]/40
                    focus:bg-[#080f1a]
                    focus:ring-2
                    focus:ring-[#01c16a]/[0.08]
                  "
                />
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.985,
                }}
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  overflow-hidden
                  rounded-xl
                  bg-[#01c16a]
                  py-3.5
                  text-sm
                  font-semibold
                  text-[#07120d]
                  shadow-[0_12px_35px_rgba(1,193,106,0.16)]
                  transition-all
                  duration-300
                  hover:bg-[#10d978]
                  hover:shadow-[0_16px_45px_rgba(1,193,106,0.28)]
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {/* Shine */}

                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    bg-white/20
                    transition-transform
                    duration-700
                    group-hover:translate-x-full
                  "
                />

                <span className="relative z-10 flex items-center gap-2.5">
                  {status === "sending" ? (
                    <>
                      <span
                        className="
                          h-4
                          w-4
                          animate-spin
                          rounded-full
                          border-2
                          border-black/20
                          border-t-[#07120d]
                        "
                      />

                      Sending message...
                    </>
                  ) : (
                    <>
                      <Send
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-0.5
                        "
                      />

                      Send Message
                    </>
                  )}
                </span>
              </motion.button>

              {/* =================================================
                  STATUS
              ================================================= */}

              <AnimatePresence mode="wait">

                {/* Success */}

                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className="
                      mt-4
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-[#01c16a]/15
                      bg-[#01c16a]/[0.05]
                      px-4
                      py-3
                      text-xs
                      text-[#01c16a]
                    "
                  >
                    <CheckCircle2 size={15} />

                    Message sent successfully. Thanks for reaching out!
                  </motion.div>
                )}

                {/* Error */}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -5,
                    }}
                    className="
                      mt-4
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-red-400/10
                      bg-red-400/[0.04]
                      px-4
                      py-3
                      text-xs
                      text-red-300/80
                    "
                  >
                    <AlertCircle size={15} />

                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Privacy */}

              <p
                className="
                  mt-5
                  text-center
                  text-[8px]
                  leading-4
                  text-white/15
                "
              >
                Your information is only used to respond to your
                message.
              </p>
            </form>
          </motion.div>
        </div>

        {/* =================================================
            FINAL CTA
        ================================================= */}

        <motion.div
          {...reveal(0.3)}
          className="mt-16 text-center"
        >
          <div className="mx-auto mb-6 flex items-center justify-center gap-2">
            <Sparkles
              size={13}
              className="text-[#01c16a]/40"
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-white/15
              "
            >
              Let's make something worth remembering
            </span>

            <Sparkles
              size={13}
              className="text-[#01c16a]/40"
            />
          </div>

          <div
            className="
              mx-auto
              h-px
              w-24
              bg-gradient-to-r
              from-transparent
              via-[#01c16a]/30
              to-transparent
            "
          />
        </motion.div>
      </div>
    </section>
  );
}