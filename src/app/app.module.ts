import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { 
  LoginModule,
  LoginRoutingModule,
  CadastroPjModule,
  CadastroPjRoutingModule,
  CadastroPfModule,
  CadastroPfRoutingModule
} from './autenticacao';
import { FuncionarioModule, FuncionarioRoutingModule } from './funcionario';
import { 
  AdminModule,
  AdminRoutingModule
 } from './admin';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LoginModule,
    LoginRoutingModule,    
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FlexLayoutModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
