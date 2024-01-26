import styles from "./styles.module.css";

export function Header() {
    return (
        <div className={styles.header}>
            <small>Course Categories</small>
            <h2>
                Begin Your Learning, <br />
                Something For <span>Everyone</span>
            </h2>
        </div>
    );
}
