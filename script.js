let addToListButton = document.getElementById('addButton');
let ItemsContainer = document.getElementById('todoItemsContainer');
let TextField = document.getElementById('inputField');
let Clear = document.getElementById('clearButton');
let done = document.getElementById('doneContainer');
let doneText = 'Done';

addButton.addEventListener('click', function(){
    var itemsList = document.createElement('ol')
    itemsList.innerText = TextField.value;
    itemsList.classList.add('paragraph-styling');
    todoItemsContainer.appendChild(itemsList);
    TextField.value = "";
    itemsList.addEventListener('click', function(){
        itemsList.style.color = 'gray';
    });
    itemsList.addEventListener('dblclick', function(){
        itemsList.style.display = 'none';
    });
});
