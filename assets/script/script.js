var list;
var input;
var delInput;

function editlist (edit) {
    let input = edit.target.innerHTML;
    let itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.value = item;
    itemInput.classList.editableList('keypress', saveItem);
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

function saveBtn () {
    var saveBtn;
    let btn = click;
}

function delete_data (delInput) {
    $ Delete_Btn (remove.itemInput)}
    {
    let input = addEventListener.remove.input;
    itemInput.type = 'text';
    itemInput.value = item;
    itemInput.classList.delete_data('keypress', delItem);
    itemInput.addEventListener('click', saveItem);
    edit.target.parentNode.prepend(itemInput);
}
