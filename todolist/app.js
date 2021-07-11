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
    localStorage.setItem('Todo_list',JSON.stringify(todoMap));//Cохранение данных в локальное хранилище браузера.
    userInput.val('');

    let deleteButton = $('<button>');//Удаление заметки.
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);
    deleteButton.click(deleteTodoItem);

    //Смена цвета заметки.
    let colorButton = $('<button>');
    colorButton.append(document.createTextNode('✓'));
    li.append(colorButton);
    colorButton.click(colorTodoItem);

    //Удаление заметки.
    function deleteTodoItem() {
        //li.click(colorTodoItem);
        li.animate({
            'margin-left':'500px',
            'margin-right':'500px',
            'opacity':'0.5',
 
        },{duration:2000,queue:true});   
        li.animate({
            'margin-left':'-2450px',
            'margin-right':'2550px',
        },{duration:2000,queue:true}).fadeOut(1000).remove(4000);   
    }

    //Смена цвета заметки.
    function colorTodoItem() { 
         
     li.toggleClass('done').toggleClass('hide');
     
     
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


