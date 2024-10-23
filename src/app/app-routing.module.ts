import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { AddOrdinateurComponent } from './add-ordinateur/add-ordinateur.component';
import { UpdateOrdinateurComponent } from './update-ordinateur/update-ordinateur.component';
import { RechercheParMarqueComponent } from './recherche-par-specialite/recherche-par-specialite.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes:   Routes = [
  {path: "Ordinateurs", component : OrdinateursComponent},
  {path: "add-ordinateur", component : AddOrdinateurComponent},
  { path: "", redirectTo: "Ordinateurs", pathMatch: "full" } , 
  {path: "update/:id", component: UpdateOrdinateurComponent},
  {path: "rechercheParMarque", component : RechercheParMarqueComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeMarques", component : ListeMarquesComponent},
  {path: 'login', component: LoginComponent} , 
  {path: 'app-forbidden', component: ForbiddenComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
