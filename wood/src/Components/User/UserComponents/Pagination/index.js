import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';

import { setPage } from '../../../../Actions/main';

import './pagination.scss';

function Pagination() {
  const dispatch = useDispatch();
  const { page, pageCount} = useSelector(({ main }) => main);

  const handlePageChange = (selectedPage) => {
    dispatch(setPage(selectedPage));
  };

  return (
    <div>
        <ReactPaginate
          nextLabel="next"
          breakLabel="..."
          initialPage={page}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="previous"
          pageClassName="paginationItem"
          containerClassName="pagination"
          nextClassName="paginationLabel"
          breakClassName="paginationBreak"
          previousClassName="paginationLabel"
          activeClassName="paginationActiveItem"
          onPageChange={({ selected }) => handlePageChange(selected)}
        />
    </div>
  );
}

export default Pagination;
