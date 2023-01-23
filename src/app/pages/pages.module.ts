import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
    FormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
