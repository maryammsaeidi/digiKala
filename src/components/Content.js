import Products from "./Products";
// import Sort from "./Sort";
import productList from '../data/productList'

const Content = () => {
  return `<div id="widgetGroup" class="widgetGroup">
              ${Products(productList)}
          </div>`;

};
export default Content;
