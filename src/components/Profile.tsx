import { motion } from "framer-motion";
import { Avatar } from "./Avatar";

export function Profile() {
  return (
    <div className="flex flex-col items-center">
      <Avatar />

      <motion.strong
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl mt-4 font-sans text-white"
      >
        Ronald Tomaz
      </motion.strong>
    </div>
  );
}
