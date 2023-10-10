export interface Product {
    name: string;
    category: string;
    month: number;
    year: number;
    total: number;
    price: number;
    brand: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Brand {
    id: string;
    name: string;
}
