"use client";

import React, { useEffect } from "react";
import Card from "../../../common/components/card/Card";
import ItemsList from "../../../common/constants/items_list.json";
import styles from "./items.module.css";
import Pagination from "../../../common/components/pagination/Pagination";

const Items = () => {
  const totalPageNumber = Math.round(ItemsList.length / 36);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentPageItems, setCurrentPageItems] = React.useState(
    ItemsList.slice(0, 36)
  );
  useEffect(() => {
    setCurrentPageItems(ItemsList.slice(currentPage, currentPage + 36));
  }, [currentPage]);
  console.log(currentPageItems);
  return (
    <section>
      <section className={styles["search-results-container"]}>
        {currentPageItems.map((itemData, index) => {
          return (
            <Card
              key={index}
              itemName={itemData.name}
              itemImage={itemData.image}
              // description={itemData.description}
              tags={itemData.tags}
              className={styles["search-result-item"]}
            />
          );
        })}
      </section>
      <Pagination
        totalPageNumber={totalPageNumber}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default Items;
