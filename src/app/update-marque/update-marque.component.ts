import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Specialite } from '../model/specialite.model';

@Component({
  selector: 'app-update-marque',
  templateUrl: './update-marque.component.html',
  styleUrls: ['./update-marque.component.css']
})
export class UpdateMarqueComponent implements OnInit {
  @Input()
  marque! :Specialite;
  @Input()
ajout!:boolean;   

  @Output()
marqueUpdated = new EventEmitter<Specialite>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateSpecialite ",this.marque);
    }
    saveSpecialite(){
      this.marqueUpdated.emit(this.marque);
      }
      
}
