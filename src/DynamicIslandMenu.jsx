import { motion } from "framer-motion";
import { useState } from "react";

export default function DynamicIslandMenu({ shrink }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer text-white shadow-lg backdrop-blur-xl bg-white/10 border border-white/20"
      animate={{
        width: open ? 320 : shrink ? 100 : 160,
        height: open ? 60 : 40,
        borderRadius: 999,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onClick={() => setOpen(!open)}
    >
      {!open ? (
        <div className="flex items-center justify-center h-full font-medium">
          {shrink ? "☰" : "Menu"}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-6 h-full text-sm">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#resume" className="hover:text-gray-300">Resume</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      )}
    </motion.div>
  );
}