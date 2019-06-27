function deleteItem(event) {
  let buttonToDelete = event.target.parentNode.parentNode;
  let contentDiv = document.getElementsByClassName('wrapper-product');
  for (let i = 0; i < contentDiv.length; i++) {
    if (contentDiv[i] === buttonToDelete) {
      contentDiv[i].remove(buttonToDelete);
    }
  }
}

function getPriceByProduct(itemNode, position) {
  let elements = document.getElementsByClassName(itemNode);
  for (let i = 0; i < elements.length; i++) {
    if (i === position) {
      return elements[i].innerHTML;
    }
  }
}

function getQuantityOfProducts(itemNode, position) {
  return document.getElementsByName(itemNode)[position].value;
}

function updatePriceByProduct(productPrice, index) {
  let nodeTotalPrice = document.getElementsByClassName(productPrice);
  let totalPriceProducts = 0;

  for (let i = 0; i < index.length; i++) {
    totalPriceProducts += getTotalPrice(i);
    nodeTotalPrice[i].innerHTML = getTotalPrice(i);
  }

  let totalShoppingCart = document.getElementsByClassName('total');
  for (let i = 0; i < totalShoppingCart.length; i++) {
    totalShoppingCart[i].innerHTML = totalPriceProducts;
  }

  let displayNone = document.getElementById('total-shopping-cart');
  displayNone.removeAttribute('id');
  displayNone.setAttribute('class', 'total-shopping-cart-true');
}

function getTotalPrice(position) {
  return this.getPriceByProduct('cost-unit', position) * this.getQuantityOfProducts('quantity', position);

}

function createQuantityInput() {

}

function createDeleteButton() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
  const div = document.createElement("div");
  div.innerHTML = `
  <div class = "wrapper-product">
      <div>
        <span class="product-name">${itemName}</span>
      </div>  
      <div>
        $ <span class ="cost-unit">${itemUnitPrice}</span>
      </div>
      <div class="quantity">
        <label for="quantity">QTY</label>
        <input type="number" id="quantity" name="quantity" value="">
      </div>
      <div>
        $ <span class="total-price">0.00</span>
      </div>
      <div>
        <button class="btn-delete" name="btn-delete">Delete</button>
      </div>  
    </div>
  `;
  return div;
}

function createNewItem() {
  let name = document.getElementById('name').value;
  let price = document.getElementById('price').value;

  let wrapper = document.getElementById('container');
  let newItemRow = createNewItemRow(name, price);

  wrapper.appendChild(newItemRow);
  newItemRow.querySelector(".btn-delete").onclick = deleteItem;
}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');

  let btnCalcPricesButton = document.querySelector("#calc-prices-button");
  btnCalcPricesButton.setAttribute("onclick", "updatePriceByProduct('total-price', document.getElementsByClassName('wrapper-product'))");

  var deleteButtons = document.getElementsByClassName('btn-delete');
  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }

  let btnCreateProduct = document.querySelector(".buttonAddNewProduct");
  btnCreateProduct.onclick = createNewItem;

}
