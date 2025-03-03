import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Macbook Pro 14-inch', description: 'The most intelligence from Apple with the acceptable weight', price: 1200 },
    { id: 2, name: 'iPhone 15', description: 'Embedded Apple Intelligence with the new outlook', price: 800 },
    { id: 3, name: 'Blueberry', description: 'Most Fresh and nutritious fruit in the grocery', price: 600 }
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }
}

