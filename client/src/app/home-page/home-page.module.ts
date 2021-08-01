import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';

export const routes = [
    { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
      CommonModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      AngularMaterialModule,
      FormsModule,
      RouterModule.forChild(routes)
  ]
  
})
export class HomePageModule { }