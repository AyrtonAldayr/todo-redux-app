import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { marcarTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  compledato = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  marcarTodo() {
    this.compledato = !this.compledato;
    console.log(this.compledato);
    this.store.dispatch(marcarTodo({ completado: this.compledato }));
  }

}
