import styles from "./Pagination.module.css";

const Pagination = ({ totalPageNumber, currentPage, setCurrentPage }) => {
  const pages = Array.from({ length: totalPageNumber }, (_, i) => i + 1);

  const handleClick = (page) => {
    if (page !== currentPage) setCurrentPage(page);
  };
  console.log(currentPage, totalPageNumber);

  return (
    <section className={styles["pagination-container"]}>
      {currentPage !== 1 && (
        <button
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          style={{
            fontWeight: page === currentPage ? "bold" : "normal",
            textDecoration: page === currentPage ? "underline" : "none",
          }}
        >
          {page}
        </button>
      ))}
      {currentPage !== totalPageNumber && (
        <button
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPageNumber}
        >
          Next
        </button>
      )}
    </section>
  );
};

export default Pagination;
