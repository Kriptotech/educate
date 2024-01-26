import styles from "./styles.module.css";

interface IProps {
    description: string;
    title: string;
    image: string;
}

export function Item({ description, title, image }: IProps) {
    return (
        <div className={styles.item}>
            <span>{title}</span>
            <p>{description}</p>

            <div>
                <img src={image} />
            </div>
        </div>
    );
}
