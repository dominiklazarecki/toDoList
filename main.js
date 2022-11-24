const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const toDoList = [];
const buttonRemove = document.getElementsByClassName('btnRemove');






const addTask = (e) => {
    e.preventDefault();
    if (input.value === "") return
    // Przypisanie do titleTask zadania wprowadzonego przez użytkownika
    const titleTask = input.value.toLocaleLowerCase();

    // Tworzenie elementu li i pushowanie go do tablicy
    const task = document.createElement('li');
    task.textContent = titleTask;
    task.className = "task";
    toDoList.push(task);


    // Dodanie btn usuń do taska
    const btnRemove = document.createElement('button');
    btnRemove.textContent = "Usuń";
    btnRemove.className = "btnRemove";
    task.appendChild(btnRemove);

    // Wyświetlenie tablicy
    toDoList.forEach(element => ul.appendChild(element))

    // Nasłuchiwanie na btn usuń konkretnego elementu z listy UL
    task.querySelector('button').addEventListener('click', removeTask);

    //dodanie lub aktualizacja dataset.key do li
    let index = 0;
    toDoList.forEach(element => element.dataset.key = index++)

    input.value = "";
}

const removeTask = (e) => {
    //usunięcie danego li z tablicy
    toDoList.splice(e.target.parentNode.dataset.key, 1);


    // e.target.parentNode.remove();

    //aktualizacja tablicy
    ul.textContent = "";
    toDoList.forEach(element => ul.appendChild(element))
    //aktualizacja dataset.key wszystkich li
    let index = 0;
    toDoList.forEach(element => element.dataset.key = index++)
}

const searchTask = (e) => {

    // poszukiwana wartość szukana przez użutkownika w inpucie
    const searchValue = e.target.value.toLocaleLowerCase();

    // tasks - tablica wyświetlająca pasujące li, dzięki użyciu metody filter. Jesli input jest pusty tasks to to samo co toDoList
    let tasks = [...toDoList];
    tasks = tasks.filter(element => element.textContent.toLocaleLowerCase().includes(searchValue));

    // aktualizacja tablicy 
    ul.textContent = "";
    tasks.forEach(element => ul.appendChild(element));


}


input.addEventListener('input', searchTask);
form.addEventListener('submit', addTask);
