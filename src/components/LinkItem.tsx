"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Link } from "./Link";

interface LinkItemProps {
  children: ReactNode;
  href: string;
  className?: string;
  customDelay?: number;
}

const variants = {
  hidden: { opacity: 0, x: -100 },
  show: (time: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: time * 0.3
    }
  })
};

export function LinkItem({
  children,
  href,
  className,
  customDelay
}: LinkItemProps) {
  return (
    <motion.li
      initial="hidden"
      variants={variants}
      animate={"show"}
      className="w-full mb-4"
      custom={customDelay}
    >
      <Link
        href={href}
        className={clsx(
          `block w-full py-3
           rounded border-2 border-transparent
           hover:brightness-90 transition
           font-bold text-white`,
          className
        )}
      >
        {children}
      </Link>
    </motion.li>
  );
}
