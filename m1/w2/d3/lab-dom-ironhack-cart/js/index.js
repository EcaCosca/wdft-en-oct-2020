function updateSubtotal(product) {
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity > input");
  const subtotal = product.querySelector(".subtotal span");

  const priceNum = Number(price.innerHTML);
  const quantityNum = Number(quantity.value);

  const subTotalNum = priceNum * quantityNum;
  subtotal.textContent = subTotalNum;

  return subTotalNum;
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.querySelectorAll(".product");
  let total = 0;

  allProducts.forEach(function (product) {
    const subtotal = updateSubtotal(product);
    total += subtotal;
  });

  // ITERATION 3
  const totalEl = document.querySelector("#total-value span");
  totalEl.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const removeButton = event.currentTarget; // element that was clicked (on which the event occured)
  const product = removeButton.parentNode.parentNode;

  product.remove();

  // Other way:
  // const tbody = document.querySelector("tbody");
  // const product = removeButton.parentNode.parentNode;
  // tbody.removeChild(product);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  // Get the inputs and tbody parent (to append the new product later to it)
  const productNameEl = document.querySelector("#product-name");
  const productPriceEl = document.querySelector("#product-price");
  const tbody = document.querySelector("tbody");

  // const productNameEl = document.querySelector(
  //   '.create-product input[type="text"]'
  // );
  // const productPriceEl = document.querySelector(
  //   '.create-product input[type="number"]'
  // );

  // Get the value from the input elements
  const productName = productNameEl.value;
  const productPrice = productPriceEl.value;

  // Create the new tr.product element and pass it the values from inputs
  const newProduct = document.createElement("tr");

  newProduct.innerHTML = `
      <td class="name">
        <span>${productName}</span>
      </td>
      <td class="price">$<span>${productPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
  `;

  newProduct.setAttribute("class", "product");

  // Add new product elements to the tbody
  tbody.appendChild(newProduct);

  // Clear the inputs
  productNameEl.value = "";
  productPriceEl.value = "";

  // Add the eventlistener to the new product Remove button
  const removeButton = newProduct.querySelector(".btn-remove");
  removeButton.addEventListener("click", removeProduct);
}

// Runs only when all of the resources on the page are loaded (DOM is ready, files had loaded)
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  // Iteration 4
  const removeButtons = document.querySelectorAll(".btn-remove");

  removeButtons.forEach(function (oneButton) {
    oneButton.addEventListener("click", removeProduct);
  });

  // Iteration 5

  const createProductButton = document.querySelector("#create");

  createProductButton.addEventListener("click", createProduct);

  // createProductButton.onclick = createProduct;
});
