import styles from "../../page.module.css";
import Image from "next/image";


const TopBar = () => {

    return (
        <div className={styles.mainTop + " ind-root"} >
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
                        <h1>UP2DATE</h1> news
                        {/* <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        /> */}
                    </a>
                </div>
            </div>
        </div>
    )
}
export default TopBar