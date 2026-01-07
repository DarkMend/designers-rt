import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import GridLayout from "@/components/GridLayout/GridLayout";
import Image from "next/image";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.banner}>
        <Container>
          <GridLayout>
            <div></div>
            <div>
              <Image
                src="/img/banner1.png"
                alt="banner1"
                width={324}
                height={415}
              />
            </div>
            <div>
              <Image
                src="/img/banner2.svg"
                alt="banner2"
                width={324}
                height={265}
              />
            </div>
            <div>
              <Image
                src="/img/banner3.png"
                alt="banner3"
                width={324}
                height={537}
              />
            </div>
            <div>
              <Image
                src="/img/banner4.png"
                alt="banner4"
                width={324}
                height={397}
              />
            </div>
            <div></div>
          </GridLayout>
        </Container>
        <Container>
          <GridLayout className={styles.bannerBottomWrapper}>
            <div>
              <Image src="/img/logo.svg" alt="logo" width={128} height={128} />
            </div>
            <div>
              <Title className={styles.bannerBottomTitle}>
                Союз Дизайнеров РЕспублики Татарстан
              </Title>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className={styles.bannerBottomSlogan}>
              <p>НАША ОБЩАЯ ЦЕЛЬ — ВДОХНОВИТЬ МИР ЧЕРЕЗ ТВОРЧЕСТВО</p>
              <Button className={styles.bannerBottomButton}>
                СВЯЗАТЬСЯ С НАМИ
              </Button>
            </div>
          </GridLayout>
        </Container>
      </section>
      <section></section>
    </>
  );
}
