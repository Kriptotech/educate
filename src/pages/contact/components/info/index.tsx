import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import img from "./assets/contat.png";

export default function Info() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <img src={img} alt="" />

                <div className={styles.right}>
                    <small>Contact Email</small>
                    <h2>
                        Write Us Anytime, We Would Love To Hear From{" "}
                        <span>You!</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Non convallis
                        sed id aliquam tempus. Volutpat tortor tincidunt egestas
                        sit risus donec. Lorem ipsum dolor sit amet consectetur.
                        Non convallis sed id aliquam tempus. Volutpat tortor
                        tincidunt egestas sit risus donec.
                    </p>
                    <Link to="mailto:example@gmail.com">example@gmail.com</Link>
                </div>
            </div>
        </div>
    );
}
