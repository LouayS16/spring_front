import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../model/medecin.model';
import { Specialite } from '../model/specialite.model';


@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styleUrls: ['./recherche-par-marque.component.css']
})
export class RechercheParMarqueComponent  implements OnInit{
  ngOnInit(): void {
    this.pcService.listeSpecialites().
    subscribe(cats => {this.marques = cats;
    console.log(cats);
    });
  }
  constructor(private pcService  : MedecinService   , ){}
  ordinateurs! : Medecin[];
  IdSpecialite! : number;
  marques! : Specialite[];
  onChange() {
    this.pcService.rechercherParSpecialite(this.IdSpecialite).
    subscribe(prods =>{this.ordinateurs=prods});
    }
}
