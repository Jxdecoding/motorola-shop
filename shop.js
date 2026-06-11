// motorola-shop client-side cart logic
// Demo for Motorola CMSO Agentic AI training.

let cartCount = 0;

function addToCart() {
  cartCount += 1;
  document.getElementById("cart-count").textContent = cartCount;
  const status = document.getElementById("cart-status");
  if (status) {
    status.textContent = "Added! Cart has " + cartCount + " item(s).";
  }
}

document.getElementById("add-to-cart-btn").addEventListener("click", addToCart);
