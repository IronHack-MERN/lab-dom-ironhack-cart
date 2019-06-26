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

}

function createNewItem() {

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
};
