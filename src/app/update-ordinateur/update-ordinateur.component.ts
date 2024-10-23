import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
import { Specialite } from '../model/specialite.model';

@Component({
  selector: 'app-update-ordinateur',
  templateUrl: './update-ordinateur.component.html',
  styleUrls: ['./update-ordinateur.component.css']
})
export class UpdateOrdinateurComponent implements OnInit{

    specialites! : Specialite[]  ; 
    updatedMarId! : number;
    currentMedecin = new Medecin();
    constructor(private activatedRoute: ActivatedRoute,
    private medecinService: MedecinService , private router : Router) { }
    

    updateMedecin() {
      this.currentMedecin.specialiteMedecin = this.specialites.
       find(cat => cat.idSpecialite == this.updatedMarId)!;
      this.medecinService.updateMedecin(this.currentMedecin).subscribe(prod => {
      this.router.navigate(['Ordinateurs']); }
      );
  }

    ngOnInit(): void {
      this.medecinService.listeSpecialites().
      subscribe(marqs => {this.specialites = marqs;
      console.log(marqs);
      });
      this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params['id']).
      subscribe( prod =>{ this.currentMedecin = prod;
      this.updatedMarId =
      this.currentMedecin.specialiteMedecin!.idSpecialite;
      } ) ;
      }

}
