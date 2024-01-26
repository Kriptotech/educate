import styles from "./styles.module.css";
import img from "../../assets/feture-bg-shape.png";

interface IProps {
    description: string;
    title: string;
    image: string;
}

export function Item({ description, image, title }: IProps) {
    return (
        <div className={styles.item}>
            <div>
                <img src={image} alt="" />
            </div>

            <strong>{title}</strong>

            <p>{description}</p>

            <img className={styles.bg_img} src={img} alt="" />
        </div>
    );
}
