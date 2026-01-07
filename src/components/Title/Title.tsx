import styles from "./Title.module.scss";
import cn from "classnames";

interface ITitle {
  children: string;
  className?: string;
}

export default function Title({ children, className }: ITitle) {
  return <h1 className={cn(styles.title, className)}>{children}</h1>;
}
