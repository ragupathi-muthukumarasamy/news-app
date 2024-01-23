import MediaControlCard from "../components/dynamiccomponents/MediaControlCard"
import styles from "../page.module.css";
import { carouselData, newsSections } from "../Constants/cardconstants";



const Home = () => {
    return (
        <div className={styles.mediCard}>
            <MediaControlCard carouselData={carouselData} />
        </div>
    )
}

export default Home