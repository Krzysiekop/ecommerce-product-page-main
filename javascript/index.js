const productThumbinails = document.querySelectorAll(".product__thumbnail");
const productImage = document.querySelector(".product__image");

productThumbinails.forEach((productThumbinail, index) => {
  productThumbinail.addEventListener("click", function () {
    productThumbinails.forEach((productThumbinail) => {
      productThumbinail.classList.remove("active");
    });

    productThumbinail.classList.add("active");
    productImage.style.content = `url("../images/image-product-${index+1}.jpg")`;
  });
});

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
