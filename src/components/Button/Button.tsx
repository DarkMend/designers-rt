import { IButton } from "./Button.props";
import styles from "./Button.module.scss";
import cn from "classnames";

export default function Button({ children, className, ...props }: IButton) {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
}
