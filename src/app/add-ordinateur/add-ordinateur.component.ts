import { Component, OnInit } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Specialite } from '../model/specialite.model';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-add-ordinateur',
  templateUrl: './add-ordinateur.component.html',
  styleUrls: ['./add-ordinateur.component.css']
})
export class AddOrdinateurComponent  implements OnInit{
  newMedecin  = new Medecin() ;
  newIdMar! : number;
  specialite! : Specialite[] ; 
newSpecialite! :Specialite;
  addMedecin(){
    
    this.newMedecin.specialiteMedecin = this.specialite.find(cat => cat.idSpecialite == this.newIdMar)!;
console.log(this.newMedecin)
    this.medecinService.ajouterMedecin(this.newMedecin)
    .subscribe(med => {
    console.log(med);
    this.router.navigate(['Ordinateurs']);
    });
 

    }
    constructor(private medecinService : MedecinService , private router : Router , private auth : AuthService){

    }
  ngOnInit(): void {
    if (this.auth.isAdmin() ==false)
    {
      this.router.navigate(['app-forbidden']);
    }
    this.medecinService.listeSpecialites().
    subscribe(marqs => {this.specialite = marqs;
    });
    console.log(this.specialite)
  }
}
