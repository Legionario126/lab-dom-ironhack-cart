let list = document.getElementById('list')

//numeros
let qty = document.getElementsByClassName("quantity")
let price = document.getElementsByName("createNewItemRow")
let addPrice = document.getElementsByName("createNewItemRow")

//botones
let buttonDel = document.getElementsByClassName("btn-delete")
let addItem = document.getElementsByName("createItemNode")

//Agregar producto
function addTodo() {
  let newTodo = document.createElement('li')
  newTodo.innerText = todo[0].value
  list.appendChild(newTodo)
  todo[0].value = ''
}

let toal=qty+addPrice

//print
console.log(qty)
console.log(addPrice)
console.log(total)

list.addEventListener('click', e => {
  list.removeChild(e.target)
})

buttonDel.onclick = buttonDel
addItem.onclick = addItem







/*
function deleteItem(e){
  var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){

}

function createDeleteButton(){
  list.addEventListener('click', e => {
    list.removeChild(e.target)
  })
}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){
}

function createNewItemRow(itemName, itemUnitPrice){
   
}

function createNewItem(){
  let newTodo = document.createElement('li')
  newTodo.innerText = todo[0].value
  list.appendChild(newTodo)
  todo[0].value = ''
}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};

*/
