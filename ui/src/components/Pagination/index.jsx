import { Button } from '../Button'
import './Pagination.css'

export const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {

  const renderPageNumbers = () => {
    return (
      pageNumbers.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`page-number ${pageNumber === currentPage ? 'active' : ''}`}
          onClick={() => onNextPage(pageNumber)}
        >
          {pageNumber}
        </span>
      ))
    )
  }

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1)

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
