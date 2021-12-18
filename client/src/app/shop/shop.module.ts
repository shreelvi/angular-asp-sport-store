import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: ShopComponent }
];

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ShopComponent]
})
export class ShopModule { }
