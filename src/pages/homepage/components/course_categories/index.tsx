import styles from "./styles.module.css";
import { Header } from "./components/header";
import { Item } from "./components/item";

import img1 from "./assets/c-1.png";
import img2 from "./assets/c-2.png";
import img3 from "./assets/c-3.png";
import img4 from "./assets/c-4.png";
import img5 from "./assets/c-6.png";

export default function CourseCategories() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Header />

                <div className={styles.row}>
                    <Item
                        image={img1}
                        title="Cooking & Culinary"
                        description="Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus."
                    />
                    <Item
                        image={img2}
                        title="Economic & Finances"
                        description="Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus."
                    />
                    <Item
                        image={img3}
                        title="Creative Arts"
                        description="Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus."
                    />
                    <Item
                        image={img4}
                        title="Graphic Design"
                        description="Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus."
                    />
                    <Item
                        image={img5}
                        title="Artificial Intelligence"
                        description="Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus."
                    />
                    <Item
                        image={img2}
                        title="Computer Sciences"
                        description="Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam tempus."
                    />
                </div>
            </div>
        </div>
    );
}
