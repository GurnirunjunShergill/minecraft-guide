import Card from "../../../common/components/card/Card";
import ItemsList from "../../../common/constants/items_list.json";
import styles from "./items.module.css";

const Items = () => {
  const currentPageItems = ItemsList.slice(0, 30);
  console.log(currentPageItems);
  return (
    <section className={styles["search-results-container"]}>
      {currentPageItems.map((itemData, index) => {
        return (
          <Card
            key={index}
            itemName={itemData.name}
            itemImage={itemData.image}
            description={itemData.description}
            tags={itemData.tags}
            className={styles["search-result-item"]}
          />
        );
      })}
    </section>
  );
};

export default Items;
