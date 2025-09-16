import { motion } from "framer-motion";

const Welcomeyou = () => {
  return (
    <div
      className="mb-2 font-[Playfair] text-center  leading-tight"
      style={{ marginTop: "200px" }} // Adjusted for better responsiveness
    >
      <motion.h1
        initial={{ opacity: 0, x: -70 }} // Start from the left
        animate={{ opacity: 1, x: 0 }} // Move to final position (center)
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Welcome to Lankapura
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: 70 }} // Start from the right
        animate={{ opacity: 1, x: 0 }} // Move to final position (center)
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2"
      >
        Ayurvedic
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, x: -70 }} // Start from the left
        animate={{ opacity: 1, x: 0 }} // Move to final position (center)
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2"
      >
        Medical Center
      </motion.h1>
    </div>
  );
};

export default Welcomeyou;
