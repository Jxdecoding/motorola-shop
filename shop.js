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

// The HTML button element might actually have id="add-cart", not "add-to-cart-btn".
// Reverting the JavaScript to query "add-cart" to match the likely HTML ID,
// as the button is currently non-functional with 'add-to-cart-btn'.
document.getElementById("add-cart").addEventListener("click", addToCart);
