const Pagination = () => {
  return `    <div class="pagination">
        <div class="pagination__arrow pagination--color">
            <i class='fa fa-angle-right'></i>
            <span class="paginationText"><a href="#" class="pagination__link">قبلی</a></span>
        </div>
        <div class="pagination__center">
            <ul class="pagination__items">
                <li class="pagination__item"><a href="#" class="pagination__item_link">1</a></li>
                <li class="pagination__item"><a href="#" class="pagination__item_link">2</a></li>
                <li class="pagination__item"><a href="#" class="pagination__item_link">3</a></li>
                <li class="pagination__item"><a href="#" class="pagination__item_link">4</a></li>
                <li class="pagination__item">...</li>
                <li class="pagination__item"><a href="#" class="pagination__item_link">10</a></li>
            </ul>
        </div>
        <div class="pagination__arrow pagination--color">
            <span class="paginationText"><a href="#" class="pagination__link">بعدی</a></span>
            <i class='fa fa-angle-left'></i>
        </div>
    </div>`;
};
export default Pagination;
