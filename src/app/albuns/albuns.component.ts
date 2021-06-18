import { Component } from '@angular/core';
import { AplicationService } from '../service/aplication.service';
import { Albums } from '../models/albums';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.less']
})
export class AlbunsComponent {

  panelOpenState = false;
  requestAlbums$: Observable<Albums>;
   
  constructor(
    private appService: AplicationService
    ) {} 

    ngOnInit() {
      this.getAllAlbums();
    } 


  //Get da lista de Albums 
  getAllAlbums() { 
    this.requestAlbums$ = this.appService.getAlbums();
  } 

}
