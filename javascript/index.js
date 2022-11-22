const productThumbinails = document.querySelectorAll(".product__thumbnail");
const productImage = document.querySelector(".product__image");


//Handle click on thumbinails
productThumbinails.forEach((productThumbinail, index) => {
  productThumbinail.addEventListener("click", function () {
    productThumbinails.forEach((productThumbinail) => {
      productThumbinail.classList.remove("active");
    });
    productThumbinail.classList.add("active");
    productImage.style.content = `url("images/image-product-${index + 1}.jpg")`;
  });
});

// Handle selecting the quantity of products
let quantityValue = 0;
const quantity = document.querySelector(".button__zero");
const addOne = document.querySelector(".button__plus");
const minusOne = document.querySelector(".button__minus");

quantity.textContent = quantityValue;
//plus one product
addOne.addEventListener("click", function () {
  if (quantityValue <= 9) {
    quantityValue++;
    quantity.textContent = quantityValue;
  } else {
  }
});
//minus one product
minusOne.addEventListener("click", function () {
  if (quantityValue >= 1) {
    quantityValue--;
    quantity.textContent = quantityValue;
  } else {
  }
});


//toggle cart card on nav
const cartButton = document.querySelector(".nav__right_cart");
const cart = document.querySelector(".cart");

cartButton.addEventListener("click", function () {
  if (window.getComputedStyle(cart).display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
});

//Handle add to cart
const cartQuantity = document.querySelector(".cart__quantity");
const price = document.querySelector('.price__after_discount').textContent;

const buyButton = document.querySelector(".buttons__right");
buyButton.addEventListener("click", function () {
  if (quantityValue > 0) {
    cartQuantity.textContent = quantityValue;
    cartQuantity.style.display = "block";
    document.querySelector(".cart__inventory--empty").style.display = "none";
    document.querySelector(".cart__inventory--full").style.display = "block";
    document.querySelector('.product__quantity').textContent = quantityValue;
    document.querySelector('.full__price').textContent = quantityValue * price;
  } else {
    cartQuantity.style.display = "none";
    document.querySelector(".cart__inventory--full").style.display = "none";
    document.querySelector(".cart__inventory--empty").style.display = "flex";
  }
});

//delete product from cart
const deleteProduct = document.querySelector(".cart__delete");
deleteProduct.addEventListener("click", function(){
  document.querySelector(".cart__inventory--full").style.display = "none";
  document.querySelector(".cart__inventory--empty").style.display = "flex";
  quantityValue = 0;
  quantity.textContent = quantityValue;
  cartQuantity.textContent = quantityValue;
  cartQuantity.style.display = "none";
})

