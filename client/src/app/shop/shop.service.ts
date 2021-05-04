import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brands';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<IProduct>(this.baseUrl + 'product');
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'product/brands')
  }

  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'product/types')
  }
}
