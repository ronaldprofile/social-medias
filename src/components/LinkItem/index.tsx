import { ReactNode } from "react";
import clsx from "clsx";

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function LinkItem({ children, href, className }: LinkProps) {
  return (
    <li
      className={clsx(
        "w-full mb-4 py-3 rounded hover:brightness-90 transition",
        className
      )}
    >
      <a
        href={href}
        className="w-full font-bold text-white hover:underline "
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    </li>
  );
}
