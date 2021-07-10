$(function(){
let buttonEnter = $('#enter');
let userInput = $('#userInput');
let ul = $('ul');
let localStorage= window.localStorage;
let todoMap=[
    {
        ind:1,
        text:'example'
    }
]

//Функция проверки поля ввода на пустоту.
function inputLength() {
    return !!userInput.val();
}

//Функция для создания и удаления заметок.
function createTodo() {
    let li = $("<li>");//Создание заметки.
    li.append(document.createTextNode(userInput.val()));
    ul.append(li);
    todoMap.push({
        ind:todoMap.length+1,
        text:userInput.val()
    })
    localStorage.setItem('Todo_list',JSON.stringify(todoMap));
    userInput.val('');

    let deleteButton = $('<button>');//Удаление заметки.
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);
    deleteButton.click(deleteTodoItem);

    //Смена цвета заметки.
    let colorButton = $('<button>');//Удаление заметки.
    colorButton.append(document.createTextNode('✓'));
    li.append(colorButton);
    li.click(colorTodoItem);

    //Удаление заметки.
    function deleteTodoItem() {
        li.fadeOut().remove();
    }
    function colorTodoItem() {
        
     li.toggleClass('done');
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

buttonEnter.click(changeListAfterButtonPress);

userInput.keypress(changeListAfterKeyPress);
})


