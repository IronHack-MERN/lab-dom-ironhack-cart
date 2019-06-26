function deleteItem(event){

}

function getPriceByProduct(itemNode){
  // console.log("el precio del producto es: " + document.getElementById(itemNode).innerHTML);
  return document.getElementById(itemNode).innerHTML;
}

function getQuantityOfProducts(itemNode){
  // console.log("el precio total es: " + document.getElementsByName(itemNode)[0].value);
  return document.getElementsByName(itemNode)[0].value;
}

//este tiene que hacer el update del producto
function updatePriceByProduct(productPrice, index){
  let nodeTotalPrice = document.getElementsByClassName(productPrice);

  for(let i = 0; i < nodeTotalPrice.length; i++){
    if(index === i){
      // update "totalPrice"
      nodeTotalPrice[i].innerHTML = getTotalPrice();
      console.log("ELemento reemplazado: " + i + " => " + nodeTotalPrice[i].innerHTML );
    }
  }
}

function getTotalPrice() {
  return this.getPriceByProduct('cost-unit') * this.getQuantityOfProducts('quantity');
  
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


let costUnit = document.getElementById("cost-unit");
let title = document.getElementsByTagName("h1");

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  let btnCalcPricesButton = document.querySelector("#calc-prices-button");
  btnCalcPricesButton.setAttribute("onclick", "updatePriceByProduct('total-price',0)");
  // calculatePriceButton.addEventListener('click',alert("cosha pasha con alert: " + updatePriceByProduct('total-price',0)));
  //calculatePriceButton.addEventListener('click', alert('clicado'));

  // createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
