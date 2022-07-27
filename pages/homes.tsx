import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import fall from "../public/assets/poolhouse/fall1.jpg";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div id="empty-div-row"></div>
      <main>
        <div className={styles.container}>
          <Head>
            <title>bone hollow studio - homes</title>
          </Head>

          <h1>
            <u>projects</u>
          </h1>

          <section className={styles.section}>
            {[...Array(8)].map((_, i) => (
              <article className={styles.article}>
                <Link href="/project">
                  <a>
                    <Image
                      alt="fall shot with dark brown pool house in the foreground, shot from the side"
                      src={fall}
                      width={500}
                      height={300}
                      objectFit="contain"
                      key={i}
                    />
                  </a>
                </Link>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
