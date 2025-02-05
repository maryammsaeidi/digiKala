import productList from "../data/productList";
import filterShow, { filterAll } from "../tools/filterShow";

const Sort = () => {
    window.setSort = setSort;
    return `<div class="sortContainer">
                <ul class="sort__items">
                     <li class="sort__item">
                        <i class="sort__icon fa fa-th"></i>
                        <span class="sort__text sort__text--color">فیلتر</span>
                     </li>
                    <li class="sort__item">
                        <i class="sort__icon fa fa-sort-amount-asc"></i>
                        <span class="sort__text sort__text--color">مرتب سازی:</span>
                    </li>
                    <li class="sort__item">
                        <a href="#" class="sort__link" onclick="setSort('cheapest')">
                            <span class="sort__text">ارزان ترین</span>
                        </a>
                    </li>
                    <li class="sort__item">
                        <a class="sort__link" href="#" onclick="setSort('expensive')">
                            <span class="sort__text" >گران ترین</span>
                        </a>
                    </li>
                    <li class="sort__item">
                        <a href="#" class="sort__link" onclick="setSort('mostVisited')">
                            <span class="sort__text" >پربازدیدترین</span>
                        </a>
                    </li>
                    <li class="sort__item">
                        <a href="#" class="sort__link" onclick="setSort('newest')">
                            <span class="sort__text" >جدیدترین</span>
                        </a>
                    </li>
                    <li class="sort__item">
                        <a href="#" class="sort__link" onclick="setSort('sells')">
                            <span class="sort__text">پرفروش‌ترین‌</span>
                        </a>
                    </li>
                </ul>
            <div id="sortCount" class="sort__count">${productList.length}کالا </div></div>`;
};

export default Sort;


const setSort = (sortValue) => {
    filterAll.sort = sortValue;
    filterShow();
}
