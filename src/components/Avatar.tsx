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
      transition={{ duration: 1, ease: ['easeIn'] }}
      className="p-2 relative border-4 border-cyan-400 rounded-full"
    >
      <motion.div className="w-full absolute -bottom-1 left-0 text-center">
        <span className="px-4 py-[7px] uppercase text-xs bg-slate-600 text-cyan-400 font-medium rounded-[5px]">
          developer
        </span>
      </motion.div>

      <motion.img
        src={avatar_url}
        alt={name}
        className="w-24 h-24 cursor-pointer rounded-full md:w-40 md:h-40"
      />
    </motion.div>
  );
}
