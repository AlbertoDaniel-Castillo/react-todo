const Pagination = ({todosPerPage, totalTodos, paginate, activeIndex}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        <nav className="pagination">
            {pageNumbers.map((number, index) => (
              <a
                key={number}
                style={{ fontWeight: activeIndex === index ? "bold" : "" }}
                onClick={() => paginate(number, index)}
                href="#!"
                className="page-link"
              >
                {number}
              </a>
            ))}
          </nav>
    );
}
 
export default Pagination;