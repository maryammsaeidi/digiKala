import ChangeItemCart from "./ChangeItemCart";
import { reducer } from "./ChangeItemCart";

const AddToShoppingCart = (id) => {
    window.showHideCom = showHideCom;
    window.reducer = reducer;
    return `<div id="addCartBtn${id}" class="button button--flex" onclick='showHideCom(this,"ChangeItemCart${id}")'>
               <a class="button__link button__link--color" href="#"  onclick='reducer(${id},"increase","countItemCart${id}")' >افزودن به سبد</a>
            </div>
            ${ChangeItemCart(id)}`
}

export default AddToShoppingCart;
// () => ChangeItemCart(this, id)

export const showHideCom = (e, changeItem) => {
    let ChangeItemCartID = document.getElementById(changeItem)
    // console.log(document.getElementById(changeItem));





    // codeME
    // if (e.style.display === "none") {
    //     e.style.display = "flex";
    //     ChangeItemCart.style.display = "none"
    // }
    // else {
    //     e.style.display = "none";
    //     ChangeItemCart.style.display = "flex"
    // }


    // codeMr.rahbar

    if (e.style.display !== 'none') {
        ChangeItemCartID.style.display = 'flex';
        e.style.display = 'none';
    }
    else {
        e.style.display = 'flex';
        ChangeItemCartID.style.display = 'none'
    }
};

