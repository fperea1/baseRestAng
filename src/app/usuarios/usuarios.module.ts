import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { TableModule } from 'primeng/table';
import { UsuariosService } from './usuarios.service';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';



@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    UsuariosRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    InputTextModule,
    ReactiveFormsModule,
    MultiSelectModule
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
