import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';

import { ProjectsComponent } from './components/projects/projects.component';
import { ButtonsAndLoginComponent } from './components/header/buttons-and-login/buttons-and-login.component';
import { LoginFormComponent } from './components/header/login-form/login-form.component';
import{HttpClientModule} from '@angular/common/http'
import { ProfileService } from './servicios/profile/profile.service';
import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { EducacionComponent } from './components/educaciones/educacion/educacion.component';
import { AgregarEducacionComponent } from './components/educaciones/agregar-educacion/agregar-educacion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    EducacionesComponent,
    ProjectsComponent,
    ButtonsAndLoginComponent,
    LoginFormComponent,
    EducacionComponent,
    AgregarEducacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
