import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0
    }),

    actions: {
        addTodo(item) {
            this.todoList.push({ item, id: this.id++, completed: false });
        },
        deleteTodo(idToFind) {
            const todo = this.todoList.find((todo) => todo.id === idToFind);
            if (todo) {
                const index = this.todoList.indexOf(todo);
                this.todoList.splice(index, 1);
            }
        },
        toggleCompleted(idToFind) {
            let todo = this.todoList.find((todo) => todo.id === idToFind);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    },

    getters: {
    },
});
