import { motion } from "framer-motion";
import { Avatar } from "./Avatar";

interface ProfileProps {
  name: string;
  avatar_url: string;
}

export function Profile({ name, avatar_url }: ProfileProps) {
  return (
    <div className="flex flex-col items-center">
      <Avatar avatar_url={avatar_url} name={name} />

      <motion.strong
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl mt-4 text-white"
      >
        {name}
      </motion.strong>
    </div>
  );
}
