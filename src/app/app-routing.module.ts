import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostagensComponent } from './postagens/postagens.component';
import { AlbunsComponent } from './albuns/albuns.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'postagens' },
  { path: 'postagens', component: PostagensComponent },
  { path: 'albums', component: AlbunsComponent }, 
  { path: 'todos', component: TodosComponent }  
];

@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
