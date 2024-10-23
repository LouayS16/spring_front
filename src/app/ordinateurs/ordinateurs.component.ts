import { Component, OnInit } from '@angular/core';

import { MedecinService } from '../services/medecin.service';
import { AuthService } from '../services/auth.service';
import { Medecin } from '../model/medecin.model';

@Component({
  selector: 'app-ordinateurs',
  templateUrl: './ordinateurs.component.html',
  styleUrls: ['./ordinateurs.component.css']
})
export class OrdinateursComponent implements OnInit {
  ordinateurs! : Medecin[] ;
  constructor(private medecinService : MedecinService , public authService: AuthService){
   
  }
  supprimerProduit(p: Medecin)
{
  let conf = confirm("Etes-vous sûr ?");
 if (conf)

  this.medecinService.supprimerMedecin(p).subscribe(() => {
    console.log("produit supprimé");
    this.chargerPcs()
    });


  }
  chargerPcs(){
    this.medecinService.listeMedecins().subscribe(prods => {
    console.log(prods);
    this.ordinateurs = prods;
    });
    }
  ngOnInit(): void {
   this.medecinService.listeMedecins().subscribe(pcs => {console.log(pcs) ; 
    this.ordinateurs = pcs 
   })
  }
}
