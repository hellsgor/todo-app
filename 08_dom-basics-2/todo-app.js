((() => {
  const MAINKEY = 'todos';

  function getStoreData() {
    return JSON.parse(localStorage.getItem(MAINKEY));
  }

  function setStoreData(data) {
    localStorage.setItem(MAINKEY, JSON.stringify(data));
  }

  function createAppTitle(title) {
    const appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  function createTodoItemForm() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const buttonWrapper = document.createElement('div');
    const button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');

    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    input.addEventListener('input', () => {
      if (input.value.trim()) {
        button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', 'true');
      }
    });

    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.setAttribute('disabled', 'true');

    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button,
    };
  }

  function createTodoList() {
    const list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem({ name, done }) {
    const item = document.createElement('li');
    const buttonGroup = document.createElement('div');
    const doneButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    if (done) item.classList.add('list-group-item-success');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');

    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';

    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  function generateTodoItemID(store, key) {
    let maxID = 0;
    if (store[key] && store[key].length) {
      store[key].forEach((todosItem) => {
        if (todosItem.id > maxID) {
          maxID = todosItem.id;
        }
      });
    }
    return ++maxID;
  }

  function changeTodoStatus(todoItem, store, key) {
    todoItem.item.classList.toggle('list-group-item-success');

    const currentTodoId = Number(todoItem.item.dataset.todoId);

    const idx = store[key].findIndex((todo) => todo.id === currentTodoId);
    store[key][idx].done = !store[key][idx].done;
    setStoreData(store);
  }

  function deleteTodo(todoItem, store, key) {
    if (window.confirm('Вы уверены?')) {
      todoItem.item.remove();

      store[key] = store[key].filter((todo) => todo.id !== Number(todoItem.item.dataset.todoId));
      setStoreData(store);
    }
  }

  function addTodosFromStore(store, key, targetList) {
    store[key].forEach((todo) => {
      const todoItem = createTodoItem({
        name: todo.name,
        done: todo.done,
      });
      todoItem.item.dataset.todoId = todo.id;
      todoItem.doneButton.addEventListener('click', () => changeTodoStatus(todoItem, store, key));
      todoItem.deleteButton.addEventListener('click', () => deleteTodo(todoItem, store, key));
      targetList.append(todoItem.item);
    });
  }

  function getTodos(todoList, key) {
    if (!getStoreData()) {
      return {};
    }
    if (!getStoreData()[key]) {
      return getStoreData();
    }
    addTodosFromStore(getStoreData(), key, todoList);
    return getStoreData();
  }

  function createTodoApp(containerName, title, key) {
    const container = document.getElementById(containerName);

    const todoAppTitle = createAppTitle(title);
    const todoItemForm = createTodoItemForm();
    const todoList = createTodoList();

    const store = getTodos(todoList, key);

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todoItemForm.form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!todoItemForm.input.value) {
        return;
      }

      const todoItem = createTodoItem({
        name: todoItemForm.input.value,
        done: false,
      });

      const currentID = generateTodoItemID(store, key);
      todoItem.item.dataset.todoId = currentID;
      const newTodo = {
        name: todoItemForm.input.value,
        done: false,
        id: currentID,
      };
      if (store[key]) {
        store[key].push(newTodo);
      } else {
        store[key] = [newTodo];
      }

      todoItem.doneButton.addEventListener('click', () => changeTodoStatus(todoItem, store, key));
      todoItem.deleteButton.addEventListener('click', () => deleteTodo(todoItem, store, key));

      todoList.append(todoItem.item);
      setStoreData(store);

      todoItemForm.input.value = '';
      todoItemForm.button.setAttribute('disabled', 'true');
    });
  }

  window.createTodoApp = createTodoApp;
})());
