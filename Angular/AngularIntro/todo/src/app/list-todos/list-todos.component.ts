import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: any = []
  message: string = ""


  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshTodos()

  }


  refreshTodos() {
    this.todoService.retriveAllTodos('sudoRoot').subscribe(res => {
      this.todos = res;
      console.log(res);
    })
  }

  updateToDo(id: any) {
    console.log(id)
    this.router.navigate(['todos', id])
  }

  deleteToDo(id: any) {
    this.todoService.deleteTodo('sudoRoot', id).subscribe(res => {
      console.log(res)
      this.refreshTodos()
      this.message = "Delete successful!"
    }, err => {
      console.log(err)
    })
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }


}
