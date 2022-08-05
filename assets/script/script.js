var list;
var input;
var inputData;
var delInput;
var container;

function editlist (edit) {
    let input = edit.target.innerHTML;
    let itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.value = item;
    itemInput.classList.add('keypress', saveItem);
    itemInput.addEventListener('click', saveItem);
    edit.target.parentNode.prepend(itemInput);
    edit.target.remove();
    itemInput.select();
    console.log(click_1);
}

function input (click_1) {
    var click;
    let click = editList;
    click.addEventListener
    editList.addEventListener;
}

