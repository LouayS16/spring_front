import { Component, OnInit } from '@angular/core';
import { Specialite } from '../model/specialite.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-liste-marques',
  templateUrl: './liste-marques.component.html',
  styleUrls: ['./liste-marques.component.css']
})
export class ListeMarquesComponent implements OnInit {

ajout:boolean=true;

  marques! : Specialite[];
  updatedMarq:Specialite = {"idSpecialite":0,"nomSpecialite":"" , "descriptionSpecialite"  : ""};

  constructor(private pcService : MedecinService) { }
  ngOnInit(): void {
  this.pcService.listeSpecialites().
  subscribe(cats => {this.marques = cats;
  console.log(cats);
  });
  }
  updateMarq(cat:Specialite) {
    this.updatedMarq=cat;
    }
    updateCat(cat:Specialite) {
      this.updatedMarq=cat;
      this.ajout=false;
      }
      
 SpecialiteUpdated(cat:Specialite){
    console.log("Cat updated event",cat);
    this.pcService.ajouterSpecialite(cat).
     subscribe( ()=> this.chargerSpecialite());
    }
    chargerSpecialite(){
      this.pcService.listeSpecialites().
      subscribe(cats => {this.marques = cats;
      console.log(cats);
      });
      }

}