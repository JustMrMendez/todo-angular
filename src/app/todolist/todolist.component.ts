import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

type Todo = {
    id: number
    todo: string
    completed: boolean
}
@Component({
    selector: 'app-todolist',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './todolist.component.html',
    styleUrl: './todolist.component.scss',
})
export class TodolistComponent {
    todoList: Todo[] = [
        { id: 1, todo: 'todo1', completed: false },
        { id: 2, todo: 'todo2', completed: true },
        { id: 3, todo: 'todo3', completed: false },
    ]
    inputTodo: string = ''
    
    oldTodoList: Todo[] = [
        { id: 1, todo: 'todo1', completed: false },
        { id: 2, todo: 'todo2', completed: true },
        { id: 3, todo: 'todo3', completed: false },
    ]
    oldInputTodo: string = ''
    
    addTodo(newTodo: string, list: Todo[]) {
        if (newTodo === '') {
            return
        }
        const newId =
            list.length > 0
                ? Math.max(...list.map((t) => t.id)) + 1
                : 1
        list.push({ id: newId, todo: newTodo, completed: false })
        this.inputTodo = ''
        this.oldInputTodo = ''
    }

    setDone(id: number) {
        this.todoList = this.todoList.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        )
    }
    deleteTodo(id: number) {
        this.todoList = this.todoList.filter((t) => t.id !== id)
    }

    trackById(index: number, item: Todo): number {
        return item.id;
      }
}
