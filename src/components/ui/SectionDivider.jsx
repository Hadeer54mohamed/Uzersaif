import { motion } from "framer-motion";

export const SectionDivider = () => {
  return (
    <div className="relative h-18 overflow-hidden bg-black">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent origin-center"
      />
    </div>
  );
};
