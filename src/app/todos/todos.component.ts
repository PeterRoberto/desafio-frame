import { Component } from '@angular/core';
import { Todos } from '../models/todos';
import { AplicationService } from '../service/aplication.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent {
  panelOpenState = false;
  requestTodos$: Observable<Todos>;

  constructor(
    private appService: AplicationService
    ) {} 

  ngOnInit() {
    this.getAllTodos();
  } 

  //Get da lista de Postagens
  getAllTodos() {   
    this.requestTodos$ = this.appService.getTodos();
  } 
}
