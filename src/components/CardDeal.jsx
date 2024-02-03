import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Data Driven Decisions <br className="sm:block hidden" /> and Value
        Creation.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      In reality, all businesses need to know how to deliver faster, better 
or cheaper solutions to their customers’ needs than their competitors do.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;