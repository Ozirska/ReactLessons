import React from "react";

const Pagination = ({ goPrev, goNext, page, length }) => {
  let btnNext = "→";
  let btnPrev = "";
  const next = () => {
    if (page === length) {
      btnNext = "";
      return;
    }
    btnNext = "→";
    return goNext;
  };

  const prev = () => {
    if (page === 1) {
      btnPrev = "";
      return;
    }
    btnPrev = "←";
    btnNext = "";
    return goPrev;
  };
  return (
    <div className="pagination">
      <button className="btn" onClick={prev()}>
        {btnPrev}
      </button>
      <span className="pagination__page">{page}</span>

      <button className="btn" onClick={next()}>
        {btnNext}
      </button>
    </div>
  );
};

export default Pagination;
