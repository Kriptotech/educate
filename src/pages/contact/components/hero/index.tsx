import styles from "./styles.module.css";
import img from "./assets/page_title.png";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div>
                    <h1>Contact Us</h1>
                </div>

                <img src={img} alt="" />
            </div>
        </div>
    );
}
