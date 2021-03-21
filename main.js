'use strict';
    const todoBody = document.getElementById('todoBody');
    const addTask = document.getElementById('addTask');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todos = [];
    const showTodo = () => {
      while (document.querySelector('.todoList')) {
        todoBody.removeChild(document.querySelector('.todoList'));
      }
      todos.forEach((todo, index) => {
        const tr = document.createElement('tr');
        tr.className = 'todoList';
        const tdId = document.createElement('td');
        tdId.textContent = `${index}`;
        tr.appendChild(tdId);
        const tdComment = document.createElement('td');
        tdComment.textContent = `${todo}`;
        tr.appendChild(tdComment);
        const tdWorkBtn = document.createElement('td');
        const workBtn = document.createElement('button');
        workBtn.textContent = '作業中';
        tdWorkBtn.appendChild(workBtn);
        tr.appendChild(tdWorkBtn);
        const tdRemoveBtn = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '削除';
        tdRemoveBtn.appendChild(removeBtn);
        tr.appendChild(tdRemoveBtn);
        todoBody.appendChild(tr);
      });
    };
    addTaskBtn.addEventListener('click', () => {
      const todo = addTask.value;
      addTask.value = '';
      if(todo) {
        todos.push(todo);
        showTodo();
      }
    });
