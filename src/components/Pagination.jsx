import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];

  for (let index = 1; index < Math.ceil(totalPosts / postPerPage); index++) {
    pageNumbers.push(index);
  }
  console.log('ceil', Math.ceil(totalPosts / postPerPage), 'without ceil', (totalPosts / postPerPage))
  return (
    <nav >
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li className="page-item">
            <a onClick={() => paginate(number)} href='!#' className='page-link'>{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination