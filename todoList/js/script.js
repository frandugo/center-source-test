window.addEventListener('load', () => {
    const todoInput = document.querySelector('#todoInput');
    const todoForm = document.querySelector('#todoForm');
    const todoList = document.querySelector('#todoList');

    const setStorage = (name, values) => {
        localStorage.setItem(name, JSON.stringify(values));
    };
      
    const getStorage = (name) => {
        return JSON.parse(localStorage.getItem(name)) || [];
    };

    const buildTodoElement = (todo, index) => {
        const todoElement = document.createElement('li');
        const todoText = document.createElement('span');
        todoText.textContent = todo;

        const deleteTodo = document.createElement('button');
        deleteTodo.textContent = 'Delete';
        deleteTodo.addEventListener('click', () => deleteTodoElement(index));

        todoElement.appendChild(todoText);
        todoElement.appendChild(deleteTodo);
        return todoElement;
    };

    const deleteTodoElement = (index) => {
        let todos = getStorage("todos");
        todos.splice(index, 1); 
        setStorage("todos", todos);
        renderTodoList(todos);
    };

    const renderTodoList = (todos) => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const todoElement = buildTodoElement(todo, index);
            todoList.appendChild(todoElement);
        });
    };

    const todos = getStorage("todos");
    renderTodoList(todos);

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todo = todoInput.value;
        if (todo) {
            let updatedTodos = getStorage("todos");
            updatedTodos.unshift(todo);
            setStorage("todos", updatedTodos);

            renderTodoList(updatedTodos);

            todoInput.value = '';
        }
    });
});
