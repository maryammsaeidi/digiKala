import AddToShoppingCart from "./AddToShoppingCart";

const Products = (productList) => {
  let id = 0;
  return productList
    .map((item) => {
      id++;
      return `<div class="widgetCard">
                  <div class="widgetCard__pin">
                      <a class="widgetCardPin__link">
                         <i class="fa fa-map-pin"></i>
                      </a>
                  </div>
                  <div class="widgetCard__image">
                    <img class="image" src="../src/assets/images/${item.url}"/>
                  </div>
                  <div class="widgetCard__title widgetCard__title--size">${item.title}</div>
                  <div class="widgetCard__price">
                    <span class="price">${item.price} </span>
                    <span class="widgetCard__text">هزار تومان </span>
                  </div>
                     ${AddToShoppingCart(id)}
              </div>`;
    })
    .join("");
};
export default Products;
