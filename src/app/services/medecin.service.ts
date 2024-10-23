import { Injectable } from '@angular/core';
import { Medecin } from '../model/medecin.model';

import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specialite } from '../model/specialite.model';
const httpOptions = {headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  apiURL: string = 'http://localhost:8090/medecins/api/medecins';
  apiURLMar: string = 'http://localhost:8090/medecins/api/specialites';
  medecins: Medecin[]=[]; //un tableau de Medecin
  medecin!: Medecin;
  specialites: Specialite[] = [];
  constructor( private http : HttpClient) {
    
  }
  listeMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(this.apiURL);;
  }
  ajouterMedecin(medecin: Medecin) {
    return this.http.post<Medecin>(this.apiURL, medecin, httpOptions);
  }
  listeSpecialites(): Observable<Specialite[]> {
    return this.http.get<Specialite[]>(this.apiURLMar);
  }

  consulterSpecialite(id: number): Specialite {
    return this.specialites.find(mar => mar.idSpecialite == id)!;
  }
  consulterMedecin(id: number): Observable<Medecin> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Medecin>(url);
  }

  updateMedecin(p: Medecin) {
    return this.http.put<Medecin>(this.apiURL + `/${p.idMedecin}`, p, httpOptions);

  }

  trierMedecins() {
    this.medecins = this.medecins.sort((n1, n2) => {
      if (n1.idMedecin! > n2.idMedecin!) {
        return 1;
      }
      if (n1.idMedecin! < n2.idMedecin!) {
        return -1;
      }
      return 0;
    });
  }
  rechercherParNom(nom: string):Observable< Medecin[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Medecin[]>(url);
    }

    ajouterSpecialite( cat: Specialite):Observable<Specialite>{
      return this.http.post<Specialite>(this.apiURLMar, cat, httpOptions);
      }
      
    
  rechercherParSpecialite(idMar: number):Observable< Medecin[]> {
    const url = `${this.apiURL}/medecinsMar/${idMar}`;
    return this.http.get<Medecin[]>(url);
    }
    
  supprimerMedecin(prod: Medecin) {
    const url = `${this.apiURL}/${prod.idMedecin}`;
    return this.http.delete(url, httpOptions);
  }
}