import { Component, OnInit } from '@angular/core';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../model/medecin.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  nomMedecin  :string ="" ; 
  ordinateurs! : Medecin[];




  constructor (private pcService : MedecinService ){}
  rechercherMedecin(){
    this.pcService.rechercherParNom(this.nomMedecin).
    subscribe(prods => {
    this.ordinateurs = prods;
    console.log(prods)});
    }
    
}
