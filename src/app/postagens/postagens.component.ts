import { Component } from '@angular/core';
import { AplicationService } from '../service/aplication.service';
import { Observable } from 'rxjs';
import { Postagens } from '../models/postagens';


@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.less']
})
export class PostagensComponent {
  panelOpenState = false;
  requestPosts$: Observable<Postagens>;
   
  constructor(
    private appService: AplicationService
    ) {} 

    ngOnInit() {
      this.getAllPosts();
    } 


  //Get da lista de Postagens
  getAllPosts() { 
    this.requestPosts$ = this.appService.getPostagens();
  } 


} 
