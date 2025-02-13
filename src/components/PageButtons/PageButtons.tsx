import css from "./PageButtons.module.css";

type TypeName = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

const PageButtons: React.FC<TypeName> = ({ page, setPage, totalPages }) => {
  const handlePrev = () => {
    setPage((p) => Math.max(1, p - 1));
  };

  const handleNext = () => {
    setPage((p) => Math.min(totalPages, p + 1));
  };

  return (
    <div className={css.buttonsWrap}>
      <button className={css.button} onClick={handlePrev} disabled={page === 1}>
        Prev
      </button>
      <div>
        Page: {page} of {totalPages}
      </div>
      <button
        className={css.button}
        onClick={handleNext}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PageButtons;
