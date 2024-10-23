import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdinateursComponent } from './ordinateurs/ordinateurs.component';
import { AddOrdinateurComponent } from './add-ordinateur/add-ordinateur.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UpdateOrdinateurComponent } from './update-ordinateur/update-ordinateur.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParMarqueComponent } from './recherche-par-specialite/recherche-par-specialite.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeMarquesComponent } from './liste-marques/liste-marques.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';



@NgModule({
  declarations: [
    AppComponent,
    OrdinateursComponent,
    AddOrdinateurComponent,
    UpdateOrdinateurComponent,
    RechercheParMarqueComponent,
    RechercheParNomComponent,
    ListeMarquesComponent,
    UpdateMarqueComponent,
    LoginComponent,
    ForbiddenComponent
  


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    FormsModule ,
    RouterModule  , 
    HttpClientModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
