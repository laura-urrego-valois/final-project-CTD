import { Button } from '../Button'
import './Pagination.css'

export const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {

  if (totalPages <= 1) {
    return null;
  }

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (currentPage <= 2) {
      pageNumbers.push(1, 2, 3);
    } else if (currentPage >= totalPages - 1) {
      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(currentPage, currentPage + 1, currentPage + 2);
    }

    return (
      <>
        {pageNumbers.map((pageNumber) => (
          <span
            key={pageNumber}
            className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => onNextPage(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </>
    );
  }

  return (
    <div className='page__content'>
      <Button onClick={onPrevPage} disabled={currentPage === 1}>
        Anterior
      </Button>
      {renderPageNumbers()}
      <Button onClick={onNextPage} disabled={currentPage === totalPages}>
        Siguiente
      </Button>
    </div>
  )
}