import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "../constants/nav";

export default function Navbar({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
}) {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =========================================================
     NAVIGATION
  ========================================================= */

  const handleNav = (item) => {
    setIsMenuOpen(false);

    if (isHome) {
      document
        .getElementById(item.id)
        ?.scrollIntoView({
          behavior: "smooth",
        });
    } else {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(item.id)
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 120);
    }
  };

  /* =========================================================
     CLOSE MOBILE MENU
  ========================================================= */

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={[
          "fixed left-0 right-0 top-0 z-50",
          "transition-all duration-300",
          scrolled
            ? [
              "border-b border-white/[0.06]",
              "bg-[#0B0F17]/85",
              "backdrop-blur-xl",
              "shadow-[0_8px_30px_rgba(0,0,0,0.18)]",
            ].join(" ")
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div
            className="
              flex
              h-16
              items-center
              justify-between
              sm:h-[70px]
            "
          >

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              onClick={closeMenu}
              className="group"
              aria-label="Go to homepage"
            >
              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="flex items-center gap-2"
              >
                {/* Logo mark */}

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-indigo-400/15
                    bg-indigo-500/[0.07]
                    text-[10px]
                    font-bold
                    text-indigo-300
                    transition-all
                    duration-300
                    group-hover:border-indigo-400/30
                    group-hover:bg-indigo-500/[0.12]
                  "
                >
                  M
                </span>

                {/* Logo text */}

                <span
                  className="
                    text-lg
                    font-extrabold
                    tracking-[-0.04em]
                    sm:text-xl
                  "
                  style={{
                    background:
                      "linear-gradient(110deg, #818CF8 0%, #A855F7 55%, #EC4899 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  MAK
                </span>
              </motion.div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <div className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  activeSection === item.id && isHome;

                /* ---------------------------------------------
                   PAGE LINK
                --------------------------------------------- */

                if (item.type === "page") {
                  return (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="
                        group
                        relative
                        rounded-lg
                        px-3
                        py-2
                        text-[13px]
                        font-medium
                        text-slate-400
                        transition-all
                        duration-200
                        hover:bg-white/[0.035]
                        hover:text-slate-100
                      "
                    >
                      {item.label}

                      <span
                        className="
                          absolute
                          bottom-1
                          left-1/2
                          h-px
                          w-0
                          -translate-x-1/2
                          bg-indigo-400
                          transition-all
                          duration-300
                          group-hover:w-4
                        "
                      />
                    </Link>
                  );
                }

                /* ---------------------------------------------
                   SECTION BUTTON
                --------------------------------------------- */

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(item)}
                    className={[
                      `
                        relative
                        rounded-lg
                        px-3
                        py-2
                        text-[13px]
                        font-medium
                        transition-all
                        duration-200
                      `,

                      isActive
                        ? "text-indigo-300"
                        : "text-slate-400 hover:bg-white/[0.035] hover:text-slate-100",
                    ].join(" ")}
                  >
                    {item.label}

                    {/* Active indicator */}

                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                        className="
                          absolute
                          -bottom-[1px]
                          left-1/2
                          h-1
                          w-1
                          -translate-x-1/2
                          rounded-full
                          bg-indigo-400
                          shadow-[0_0_10px_rgba(99,102,241,0.8)]
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* =================================================
                DESKTOP CONTACT CTA
            ================================================= */}

            <div className="hidden md:block">
              <button
                onClick={() => {
                  const contactItem = NAV_ITEMS.find(
                    (item) => item.id === "contact"
                  );

                  if (contactItem) {
                    handleNav(contactItem);
                  }
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-lg
                  border
                  border-indigo-400/15
                  bg-indigo-500/[0.06]
                  px-3.5
                  py-2
                  text-xs
                  font-semibold
                  text-indigo-300
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-indigo-400/30
                  hover:bg-indigo-500/[0.11]
                  hover:text-indigo-200
                "
              >
                Let's Talk

                <ArrowUpRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-white/[0.07]
                bg-white/[0.025]
                text-slate-400
                transition-all
                duration-200
                hover:border-indigo-400/20
                hover:bg-indigo-500/[0.06]
                hover:text-white
                md:hidden
              "
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.18,
                    }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =======================================================
          MOBILE DRAWER
      ======================================================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              inset-0
              top-16
              z-40
              overflow-y-auto
              border-t
              border-white/[0.06]
              bg-[#0B0F17]/[0.97]
              backdrop-blur-2xl
              sm:top-[70px]
              md:hidden
            "
          >
            {/* Ambient glow */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-32
                top-10
                h-72
                w-72
                rounded-full
                opacity-30
              "
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
                filter: "blur(45px)",
              }}
            />

            <nav className="relative px-5 pb-10 pt-5 sm:px-8">

              {/* Mobile navigation */}

              <div className="space-y-1">
                {NAV_ITEMS.map((item, index) => {
                  const isActive =
                    activeSection === item.id &&
                    isHome;

                  /* Page link */

                  if (item.type === "page") {
                    return (
                      <motion.div
                        key={item.id}
                        initial={{
                          opacity: 0,
                          x: -12,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.04,
                        }}
                      >
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            py-3.5
                            text-base
                            font-medium
                            text-slate-400
                            transition-all
                            duration-200
                            hover:bg-white/[0.035]
                            hover:text-white
                          "
                        >
                          {item.label}

                          <ArrowUpRight
                            size={16}
                            className="
                              text-slate-700
                              transition-all
                              duration-200
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                              group-hover:text-indigo-400
                            "
                          />
                        </Link>
                      </motion.div>
                    );
                  }

                  /* Section button */

                  return (
                    <motion.button
                      key={item.id}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.04,
                      }}
                      onClick={() =>
                        handleNav(item)
                      }
                      className={[
                        `
                          flex
                          w-full
                          items-center
                          gap-3
                          rounded-xl
                          px-4
                          py-3.5
                          text-left
                          text-base
                          font-medium
                          transition-all
                          duration-200
                        `,

                        isActive
                          ? `
                              bg-indigo-500/[0.08]
                              text-indigo-300
                            `
                          : `
                              text-slate-400
                              hover:bg-white/[0.035]
                              hover:text-white
                            `,
                      ].join(" ")}
                    >
                      {/* Active dot */}

                      {isActive ? (
                        <span
                          className="
                            h-1.5
                            w-1.5
                            flex-shrink-0
                            rounded-full
                            bg-indigo-400
                            shadow-[0_0_8px_rgba(99,102,241,0.7)]
                          "
                        />
                      ) : (
                        <span className="h-1.5 w-1.5 flex-shrink-0" />
                      )}

                      {item.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Divider */}

              <div className="my-6 h-px bg-white/[0.06]" />

              {/* Mobile contact CTA */}

              <motion.button
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay:
                    NAV_ITEMS.length * 0.04 +
                    0.08,
                }}
                onClick={() => {
                  const contactItem =
                    NAV_ITEMS.find(
                      (item) =>
                        item.id === "contact"
                    );

                  if (contactItem) {
                    handleNav(contactItem);
                  }
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(99,102,241,0.18)]
                "
                style={{
                  background:
                    "linear-gradient(135deg, #6366F1 0%, #7C3AED 50%, #EC4899 100%)",
                }}
              >
                Let's Work Together

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}