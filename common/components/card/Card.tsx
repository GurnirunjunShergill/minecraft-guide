import styles from "./Card.module.css";
import image from "../../../assets/placeholder-600x600.png";

const Card = ({ itemName, itemImage, description, tags, className }) => {
  return (
    <section className={`${className} ${styles["card-container"]}`}>
      <h3>{itemName}</h3>
      <img src={image.src} alt={`image of ${itemName}`} />
      {/* <p>{description}</p> */}
      <section className={styles["tags-container"]}>
        {tags.map((tag, index) => {
          return (
            <p key={index} className={styles["tags"]}>
              {tag}
            </p>
          );
        })}
      </section>
      <section className={styles["button-container"]}>
        <button>Recipe</button>
        <button>Details</button>
      </section>
    </section>
  );
};
export default Card;
