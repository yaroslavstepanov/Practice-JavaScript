let buttonEnter = document.getElementById('enter');
let userInput = document.getElementById('userInput');
let ul = document.querySelector('ul');

//Функция проверки поля ввода на пустоту.
function inputLength() {
    return userInput.value.length > 0;
}

//Функция для создания и удаления заметок.
function createTodo() {
    let li = document.createElement("li");//Создание заметки.
    li.appendChild(document.createTextNode(userInput.value));
    ul.appendChild(li);
    userInput.value = '';

    let deleteButton = document.createElement('button');//Удаление заметки.
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteTodoItem);

    let colorPress = document.createElement('button')//Смена цвета заметки.
    li.appendChild(colorPress);
    colorPress.addEventListener('click', ColorTodoItem);

    //Удаление заметки.
    function deleteTodoItem() {
        li.classList.add('delete');
    }

    //Смена цвета заметки.
    function ColorTodoItem(){
        li.classList.toggle('done');
    }
}

//Добавление заметки по нажатию на клавишу 'Enter'.
function changeListAfterKeyPress(event) {
    if (inputLength() && event.which === 13) {
        createTodo();
    }
}

//Добавление заметки по нажатию на кнопку на форме.
function changeListAfterButtonPress() {
    if (inputLength()) {
        createTodo();
    }
}

buttonEnter.addEventListener('click', changeListAfterButtonPress);

userInput.addEventListener('keypress', changeListAfterKeyPress);