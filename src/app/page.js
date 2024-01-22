"use client"
import Image from "next/image";
import styles from "./page.module.css";
import MediaControlCard from "./components/dynamiccomponents/MediaControlCard";
import { carouselData, newsSections } from "./Constants/cardconstants";

export default function Home() {
  return (
    <main className={styles.main + " ind-root"}>
      <div className={styles.description}>
        <p>
          Get updates with latest&nbsp;
          <code className={styles.code}>news</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.grid}>
      {
            newsSections.map((news) => {
              return (<a
              href={news.src}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>
              {news.headline}<span>-&gt;</span>
              </h2>
              <p>{news.content}</p>
            </a>)
            })
          }
      </div>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Headlines</code>
        </p>

      </div>
      <div className={styles.mediCard}>
        <MediaControlCard carouselData={carouselData} />
      </div>

    </main>
  );
}
