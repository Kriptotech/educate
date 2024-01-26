import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import img from "./assets/about-1.png";

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <img src={img} alt="about image" />

                <div className={styles.right}>
                    <small>ABOUT US</small>
                    <h2>
                        Cultivating a Digital Learning <span>Ecosystem.</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Non convallis
                        sed id aliquam tempus. Volutpat tortor tincidunt egestas
                        sit risus donec.
                    </p>

                    <div>
                        <h4>
                            Highest quality security, Network uptime, fast
                            output. Unlimited scale and customizing
                            possibilities.
                        </h4>

                        <p>
                            Murad Hasan, <span>Head Of Idea</span>
                        </p>
                    </div>

                    <Link to="/">Read More</Link>
                </div>
            </div>
        </div>
    );
}
