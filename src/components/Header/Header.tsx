import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoWrapper}>
              <Image width={20} height={20} src="/img/logo.svg" alt="logo" />
              <p>Союз Дизайнеров РТ</p>
            </Link>
          </div>
          <menu className={styles.menu}>
            <Link href="/" className={styles.menuHref}>
              Главное
            </Link>
            <Link href="/" className={styles.menuHref}>
              О нас
            </Link>
            <Link href="/" className={styles.menuHref}>
              Правление
            </Link>
            <Link href="/" className={styles.menuHref}>
              РЕзиденты
            </Link>
            <Link href="/">
              <Button>ВСТУПИТЬ</Button>
            </Link>
          </menu>
        </div>
      </div>
    </header>
  );
}
