"use client"
import Image from "next/image";
import styles from "./page.module.css";
import MediaControlCard from "./components/dynamiccomponents/MediaControlCard";
import { carouselData, newsSections } from "./Constants/cardconstants";

export default function Home() {
  return (
    <main className={styles.main + " ind-root"}>
      <div className={styles.grid}>
      {
            newsSections.map((news,i) => {
              return (<a
              key={i}
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
      <div >
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
