import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retriveAllTodos(username: any) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos`)
    // return this.http.get<any>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username: string, id: any) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)
  }
  retriveTodo(username: string, id: any) {
    return this.http.get<any>(`${API_URL}/users/${username}/todos/${id}`)
  }

  updateTodo(username: string, id: any, todo: any) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo)
  }
  createTodo(username: string, todo: any) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo)
  }

}
