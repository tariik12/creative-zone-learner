import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pagination = ({ item, pageSize, currentPage, onPageChange }) => {
  const pageCount = item / pageSize;

  if (Math.ceil(pageCount) === 1) return null;

  const pages = range(1, pageCount + 1);

  return (
    <div className="join flex items-center my-5">
      <span
        className="p-btn cursor-pointer"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <FaArrowLeft />
      </span>

      {pages.map((page) => (
        <span
          onClick={() => onPageChange(page)}
          className={page === currentPage ? " p-btn p-btn-active " : " mx-2 "}
          key={page}
        >
          {page}
        </span>
      ))}

      <span
        className="p-btn cursor-pointer"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pages.length}
      >
        <FaArrowRight />
      </span>
    </div>
  );
};

export default Pagination;

function range(start, end, step = 1) {
  if (step === 0) {
    throw new Error("Step cannot be zero.");
  }

  const result = [];
  if (start < end && step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else if (start > end && step < 0) {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }

  return result;
}
