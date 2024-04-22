import React, { useState, useEffect } from "react";
import styles from "./pagination.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

function Pagination({ numberOfPages, currentPage, setCurrentPage }) {
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(true);

  const pageNum = [...Array(numberOfPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage > 1) {
      setDisabledPrev(false);
    } else {
      setDisabledPrev(true);
    }

    if (currentPage === numberOfPages) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
  }, [currentPage, numberOfPages]);
  return (
    <div aria-label="pagination container">
      <section className={styles.pagination} aria-label="pagination section">
        <div onClick={prevPage} className={disabledPrev ? "disabled" : "prev"}>
          <FaArrowLeft
            aria-label="arrow left"
            style={{
              backgroundColor: "#abf600",
              width: "1.5rem",
              height: "1.5rem",
              marginRight: "0.3rem",
            }}
          />
        </div>
        <div className={styles.pagination__num} aria-label="page number">
          {pageNum.map((num) => (
            <div key={num}>
              <p
                onClick={() => setCurrentPage(num)}
                className={`${styles.pagination__child} ${
                  currentPage === num ? styles.active : ""
                }`}
              >
                {num}
              </p>
            </div>
          ))}
        </div>
        <div onClick={nextPage} className={disabledNext ? "disabled" : "next"}>
          <FaArrowRight
            aria-label="arrow right"
            style={{
              backgroundColor: "#abf600",
              width: "1.5rem",
              height: "1.5rem",
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Pagination;
