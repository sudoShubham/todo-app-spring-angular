import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: any = null;
  todo: any = null;

  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, "", true, new Date())

    if (this.id != -1) {
      this.todoService.retriveTodo('sudoRoot', this.id).subscribe(res => {
        this.todo = res;
      }, err => {
        console.log(err)
      })
    }

  }


  saveTodo() {

    if (this.id == -1) {
      this.todoService.createTodo('sudoRoot', this.todo).subscribe(res => {
        console.log(res)
        this.router.navigate(['todos'])
      })
    } else {
      this.todoService.updateTodo("sudoRoot", this.id, this.todo).subscribe(res => {
        console.log(res);
        this.router.navigate(['todos'])
      }, err => {
        console.log(err)
      })
    }

  }

}
