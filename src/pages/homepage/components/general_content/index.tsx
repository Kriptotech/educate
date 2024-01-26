import styles from "./styles.module.css";
import { Item } from "./components/item";

import img1 from "./assets/Pricing.png";
import img2 from "./assets/Quality.png";
import img3 from "./assets/Check-mark.png";
import img4 from "./assets/Support.png";

export default function GeneralContent() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.row}>
                    <Item
                        image={img1}
                        title="Free Trials"
                        description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                    />
                    <Item
                        image={img2}
                        title="Lifetime Access"
                        description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                    />
                    <Item
                        image={img3}
                        title="Best Teachers"
                        description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                    />
                    <Item
                        image={img4}
                        title="24/7 Support"
                        description="At vero eos et accusamus etiusto odio
							praesentium accusamus this etiusto odio
							data center."
                    />
                </div>
            </div>
        </div>
    );
}
