"use strict";

const products = Array.from(document.querySelectorAll(".product"));

const cart = document.querySelector(".cart__products");


products.forEach((elm) => {
  const productQuantity = elm.querySelector(".product__quantity-value");

//для кнопки минус
  elm.querySelector(".product__quantity-control_dec").onclick = function() {
    if(Number(productQuantity.textContent) > 1) {
      +productQuantity.textContent --;
    };
  };


//для кнопки плюс
  elm.querySelector(".product__quantity-control_inc").onclick = function() {
    +productQuantity.textContent ++;
  };

  
// для кнопки добавить в корзину
  elm.querySelector(".product__add").onclick = function() {

    let productsInCart = Array.from(cart.querySelectorAll(".cart__product"));

    let findedProduct = productsInCart.find((product) => {
      return product.dataset.id === elm.dataset.id
    });

    if (findedProduct) {
      findedProduct.querySelector(".cart__product-count").textContent = 
      Number(findedProduct.querySelector(".cart__product-count").textContent) 
      + Number(productQuantity.textContent);

    } else {
      cart.innerHTML += `
      <div class="cart__product" data-id="${elm.dataset.id}">
        <img class="cart__product-image" src="${elm.querySelector(".product__image").src}">
        <div class="cart__product-count">${productQuantity.textContent}</div>
      </div>
      `;
    };
  };

});
