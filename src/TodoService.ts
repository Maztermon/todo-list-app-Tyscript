import { Todo } from './Todo';

export class TodoService {
  private todos: Todo[] = [];
  private lastId: number = 0;

  public getTodos(): Todo[] {
    return this.todos;
  }
  

  public addTodo = (todo: Todo): void => {
    this.todos.push(todo);
  }

  public updateTodo = (id: number, updatedTodo: Todo): void => {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    this.todos[todoIndex] = updatedTodo;
  }

  public deleteTodo = (id: number): void => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}