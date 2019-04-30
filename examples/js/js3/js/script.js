const toDoList = [];
// let foundToDoList = [];

const addForm = document.querySelector('.addForm');
const addInput = document.querySelector('.addText');
const findInput = document.querySelector('.findText');
const addUl = document.querySelector('.addUl');
const findUl = document.querySelector('.findUl');
const taskNumber = document.querySelector('h1 span');

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.index;
    toDoList.splice(index, 1);
    taskNumber.textContent = toDoList.length;
    renderList();
}

const renderList = () => {
    addUl.textContent = '';
    toDoList.forEach((toDoElement, index) => {
        toDoElement.dataset.index = index;
        addUl.appendChild(toDoElement);
    })
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = addInput.value;
    if (titleTask === '') return;

    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = `<p>${titleTask}</p>` + '<button>Usuń</button>';

    toDoList.push(newTask);
    renderList();

    addInput.value = '';
    taskNumber.textContent = toDoList.length;
    newTask.querySelector('button').addEventListener('click', removeTask);
}

const findTask = (e) => {
    findUl.textContent = '';
    const findText = e.target.value.toLowerCase();
    if(findText === '')return;
    const foundToDoList = toDoList.filter(element => element.textContent.toLowerCase().includes(findText));
    console.log(foundToDoList)

    foundToDoList.forEach(task => {
        const newEl = document.createElement('li');
        newEl.textContent = task.firstChild.innerText;
        findUl.appendChild(newEl);
    });
}

addForm.addEventListener('submit', addTask);
findInput.addEventListener('input', findTask);