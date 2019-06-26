function deleteItem(event){

}

function getPriceByProduct(itemNode, position){ 
  let elements = document.getElementsByClassName(itemNode);
  for(let i = 0; i < elements.length; i++ ){
    if(i === position){
      return elements[i].innerHTML;
    }
  }
}

function getQuantityOfProducts(itemNode, position){
  return document.getElementsByName(itemNode)[position].value;
}

function updatePriceByProduct(productPrice, index){
  let nodeTotalPrice = document.getElementsByClassName(productPrice);
  for(let i = 0; i < index.length; i++){
      nodeTotalPrice[i].innerHTML = getTotalPrice(i);
  }
}

function getTotalPrice(position) {
  return this.getPriceByProduct('cost-unit', position) * this.getQuantityOfProducts('quantity', position);
  
}

function createQuantityInput(){
  
}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  let btnCalcPricesButton = document.querySelector("#calc-prices-button");
  let totalProducts = document.getElementsByClassName('wrapper-product');
  btnCalcPricesButton.setAttribute("onclick", "updatePriceByProduct('total-price', document.getElementsByClassName('wrapper-product'))");



  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
