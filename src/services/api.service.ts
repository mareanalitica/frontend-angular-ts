import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Brand, Category, Product } from '../models/model';
import { environment } from 'src/enviroments/enviroment';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private baseUrl = environment.apiUrl;

    constructor() { }

    getProducts(): Observable<Product[]> {
        return new Observable((observer) => {
            axios
                .get(`${this.baseUrl}/product`)
                .then((response) => {
                    observer.next(response.data);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }
    getProductsByCategory(category: string): Observable<Product[]> {
        return new Observable((observer) => {
            axios
                .get(`${this.baseUrl}/product/category/${category}`)
                .then((response) => {
                    observer.next(response.data);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }

    getCategories(): Observable<Category[]> {
        return new Observable((observer) => {
            axios
                .get(`${this.baseUrl}/product/categories`)
                .then((response) => {
                    observer.next(response.data);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }

    getBrands(): Observable<Brand[]> {
        return new Observable((observer) => {
            axios
                .get(`${this.baseUrl}/product/brands`)
                .then((response) => {
                    observer.next(response.data);
                    observer.complete();
                })
                .catch((error) => {
                    observer.error(error);
                });
        });
    }
}
