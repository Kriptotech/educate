import styles from "./styles.module.css";


export default function ContactUs() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2>
                    Ask Any Questions <span>You Want!</span>
                </h2>
                <p>Contact on this number for any Questions!</p>
                <a href="tel:+1234567890">+1 234 567 890</a>
            </div>
        </div>
    );
}
