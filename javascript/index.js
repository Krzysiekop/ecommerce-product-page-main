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

addOne.addEventListener("click", function () {
  if (quantityValue <= 9) {
    quantityValue++;
    quantity.textContent = quantityValue;
  } else {
  }
});

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
    // cart.style.fill = 'black'
  } else {
    cart.style.display = "none";
    cart.style.fill = '#69707D'
  }
});

//Handle add product to cart
const cartQuantity = document.querySelector(".cart__quantity");
const price = document.querySelector(".price__after_discount").textContent;

const buyButton = document.querySelector(".buttons__right");
buyButton.addEventListener("click", function () {
  if (quantityValue > 0) {
    cartQuantity.textContent = quantityValue;
    cartQuantity.style.display = "block";
    document.querySelector(".cart__inventory--empty").style.display = "none";
    document.querySelector(".cart__inventory--full").style.display = "block";
    document.querySelector(".product__quantity").textContent = quantityValue;
    document.querySelector(".full__price").textContent = quantityValue * price;
  } else {
    cartQuantity.style.display = "none";
    document.querySelector(".cart__inventory--full").style.display = "none";
    document.querySelector(".cart__inventory--empty").style.display = "flex";
  }
});

//delete product from cart
const deleteProduct = document.querySelector(".cart__delete");
deleteProduct.addEventListener("click", function () {
  document.querySelector(".cart__inventory--full").style.display = "none";
  document.querySelector(".cart__inventory--empty").style.display = "flex";
  quantityValue = 0;
  quantity.textContent = quantityValue;
  cartQuantity.textContent = quantityValue;
  cartQuantity.style.display = "none";
});

///////////////////////////////// SLAIDER

const sliderThumbinails = document.querySelectorAll(".slider__thumbnail");
const sliderImage = document.querySelector(".slider__image");
const closeSlider = document.querySelector(".slider__close");
const slider = document.querySelector(".slider");
const overlay = document.querySelector(".overlay");
const nextImage = document.querySelector(".slider__next");
const previousImage = document.querySelector(".slider__previous");

//show slider after click on product image
productImage.addEventListener("click", function () {
  if(window.innerWidth>1100){
  slider.style.display = "block";
  overlay.style.display = "block";
  }
});

let actualSlide = 1;

// Handle click on thumbinail
sliderThumbinails.forEach((sliderThumbinail, index) => {
  sliderThumbinail.addEventListener("click", function () {
    resetActiveThumbinail();
    sliderThumbinail.classList.add("active");
    actualSlide = index + 1;
    sliderImage.style.content = `url("images/image-product-${index + 1}.jpg")`;
  });
});

// Handle click on next button
nextImage.addEventListener("click", function () {
  if (actualSlide < 4) {
    actualSlide++;
  } else {
    actualSlide = 1;
  }
  resetActiveThumbinail();
  sliderThumbinails[actualSlide - 1].classList.add("active");
  sliderImage.style.content = `url("images/image-product-${actualSlide}.jpg")`;
});

// Handle click on next button
previousImage.addEventListener("click", function () {
  if (actualSlide <= 4 && actualSlide > 1) {
    actualSlide--;
  } else {
    actualSlide = 4;
  }
  resetActiveThumbinail();
  sliderThumbinails[actualSlide - 1].classList.add("active");
  sliderImage.style.content = `url("images/image-product-${actualSlide}.jpg")`;
});

closeSlider.addEventListener("click", function () {
  slider.style.display = "none";
  overlay.style.display = "none";
});

function resetActiveThumbinail() {
  sliderThumbinails.forEach((sliderThumbinail) => {
    sliderThumbinail.classList.remove("active");
  });
}
