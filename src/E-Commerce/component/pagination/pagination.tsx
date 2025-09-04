import "./pagination.css"; // Optional, for styling the pagination
import { FC } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {/* Display page numbers, including edge cases */}
            {Array.from({ length: totalPages }, (_, index) => {
                const pageIndex = index + 1;
                return (
                    <button
                        key={pageIndex}
                        onClick={() => onPageChange(pageIndex)}
                        className={currentPage === pageIndex ? "active" : ""}
                    >
                        {pageIndex}
                    </button>
                );
            })}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;