import { ReactNode } from "react";
import clsx from "clsx";

interface LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export function Link({ children, href, className }: LinkProps) {
  return (
    <a
      href={href}
      className={clsx(
        ` block w-full py-3
          rounded border-2 border-transparent
          hover:brightness-90 transition
          font-bold text-white`,
        className
      )}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
