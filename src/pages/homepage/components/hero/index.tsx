import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import img from "./assets/main-img.png";

export default function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div>
                    <h1>
                        Best Online Learning <span>Resources!</span>
                    </h1>
                    <p>Make Your Free Account & Get Discounts</p>

                    <Link to="/">Enroll Now</Link>
                </div>

                <img src={img} alt="" />
            </div>
        </div>
    );
}
