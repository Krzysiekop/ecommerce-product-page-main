const productThumbinails = document.querySelectorAll(".product__thumbnail");

productThumbinails.forEach((productThumbinail) => {
  productThumbinail.addEventListener("click", function () {
    productThumbinails.forEach((productThumbinail) => {
      productThumbinail.classList.remove("active");
    });
    productThumbinail.classList.add("active");
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
