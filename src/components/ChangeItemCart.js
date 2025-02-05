import { showHideCom } from "./AddToShoppingCart";
let cart = [];
if (localStorage.getItem('cart') !== null) {
   cart = JSON.parse(localStorage.getItem('cart'));
}
console.log(cart);
const ChangeItemCart = (id) => {
   let cartFiitered;
   window.reducer = reducer;
   return ` <div class="button button--none button--color" id="ChangeItemCart${id}">
      <a class="button__link" href="#" onclick='reducer(${id},"increase","countItemCart${id}")'>
         <i class="icon icon--color fa fa-plus"></i>
      </a>
         <span id="countItemCart${id}" class="button__text"></span>
      <a class="button__link" href="#" onclick="reducer(${id},'decrease','countItemCart${id}')">
    ${cartFiitered = cart.filter(item => {
      return item.id == `countItemCart${id}`
   })
      }
      </a >
      </div > `
}
export default ChangeItemCart;

//   ${ innerText === "1" ? '<i class="icon icon--color fa fa-trash-o" ></i >' : '<i class="icon icon--color fa fa-minus"></i>' }
// (document.getElementById(`countItemCart${id}`).innerHTML ==="1" ? '<i class="icon icon--color fa fa-trash-o" ></i >' : '<i class="icon icon--color fa fa-minus"></i>' 
//  ${data.count === 1 ? '<i class="icon icon--color fa fa-trash-o" ></i >' : '<i class="icon icon--color fa fa-minus"></i>'}
// onclick = 'reducer("incOperation","countItemCart${id}")'
// onclick = 'reducer("decOperation","countItemCart${id}")'






export const reducer = (id, operation, countItemCartId) => {

   // console.log(document.getElementById(`countItemCart${id}`).innerHTML === "1")
   // code mr rahbar
   // console.log(id, condition, countItemCartId);
   switch (operation) {
      case 'increase':
         let flag = false;

         for (const item of cart) {
            if (countItemCartId === item.id) {
               item.count += 1
               flag = true;
            }
         }

         if (flag === false) {
            const product = { id: countItemCartId, count: 1 }
            cart.push(product);
         }

         localStorage.setItem('cart', JSON.stringify(cart));
         document.getElementById("countProductBox").style.display = "flex"
         break;
      case 'decrease':
         // let flag2 = false;

         for (const item of cart) {
            if (countItemCartId === item.id && item.count > 0) {
               item.count -= 1
               // flag2 = true;
            }
            if (countItemCartId === item.id && item.count === 0) {
               // console.log('yes');
               const filtered = cart.filter(item => {
                  return item.id !== countItemCartId
               });
               cart = filtered;

               showHideCom(document.getElementById(`addCartBtn${id}`), `ChangeItemCart${id}`);
               //change button
            }
         }

         localStorage.setItem('cart', JSON.stringify(cart));

         break;

   }




   // code maryam
   // switch (operation) {

   //    case "incOperation":
   //       // console.log(countItemCartId);
   //       let flag = false;
   //       if (localStorage.getItem('cart') !== null) {
   //          for (const item of localStorage.getItem('cart')) {
   //             if (countItemCartId === item.id) {
   //                item.count += 1
   //                flag = true;


   //             }
   //          }
   //       }

   //       if (flag === false) {
   //          const product = { id: countItemCartId, count: 1 }

   //          localStorage.setItem('cart', JSON.stringify(product));
   //       }
   //       // console.log(cart);

   //       break;
   // }

   let count = cart.map(item => {
      if (countItemCartId == item.id) {
         return item.count
      }
   }).join("")
   document.getElementById(countItemCartId).innerHTML = count;

   let values = cart.map(item => {
      return item.count
   })

   let value = values.reduce((acc, value) => {
      return (acc + value)
   })

   document.getElementById("countProduct").innerHTML = value;

   if (value === 0) {
      document.getElementById("countProductBox").style.display = "none";
   }
}



// let product = cart.filter((x) => {
//    return (countItemCartId === x.id)
// })
// if (product.length === 0) {
//    const item = { id: countItemCartId, count: 1 }
//    cart.push(item)
//    console.log(cart);
// }
// else {
//    product.map(y => {
//       return y.count += 1
//    })
// }
