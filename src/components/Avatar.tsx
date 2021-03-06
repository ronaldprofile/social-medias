import { motion } from "framer-motion";

interface AvatarProps {
  name: string;
  avatar_url: string;
}

export function Avatar({ avatar_url, name }: AvatarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
      className="p-1 border-4 border-cyan-400 rounded-full"
    >
      <motion.img
        src={avatar_url}
        alt={name}
        className="w-24 h-24 cursor-pointer rounded-full md:w-52 md:h-52"
      />
    </motion.div>
  );
}
