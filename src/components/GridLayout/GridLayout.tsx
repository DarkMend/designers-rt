import { ReactNode } from "react";
import styles from "./GridLayout.module.scss";
import cn from "classnames";

export default function GridLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(styles.wrapper, className)}>{children}</div>;
}
