import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ApiService } from 'src/services/api.service';
import { Product, Category, Brand } from '../../../models/model';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
    @Input() reportProps: any;
    chart: Chart | null = null;

    selectedCategory: string = 'fisico';
    selectedProduct: string = 'curso';
    selectedBrand: string = 'Adidas';

    categories: Category[] = [];
    brands: Brand[] = [];
    products: Product[] = [];
    salesByMonth: number[] = [];
    filteredSalesByMonth: number[] = [];
    uniqueProductNames: string[] = [];

    constructor(private apiService: ApiService) { }

    updateChart() {
        if (this.chart) {
            this.chart.destroy();
        }
        const ctx = document.getElementById('barChart') as HTMLCanvasElement;
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
                ],
                datasets: [{
                    label: 'Vendas',
                    data: this.filteredSalesByMonth,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }


    ngOnInit() {
        this.apiService.getCategories().subscribe((data: Category[]) => {
            this.categories = data;
        });


        this.apiService.getBrands().subscribe((data: Brand[]) => {
            this.brands = data;
        });


        this.apiService.getProducts().subscribe((data: Product[]) => {
            this.uniqueProductNames = Array.from(new Set(data.map(product => product.name)));
            this.products = data;
        });


        this.salesByMonth = new Array(12).fill(0);
        this.filteredSalesByMonth = [...this.salesByMonth];
        this.updateChart();
    }
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    onCategorySelected() {
        if (this.selectedCategory) {

            const filteredProducts = this.products.filter((product) => product.category === this.selectedCategory);


            this.filteredSalesByMonth = new Array(12).fill(0);
            filteredProducts.forEach((product) => {
                this.filteredSalesByMonth[product.month - 1] += product.total;
            });


            this.updateChart();
        }
    }

    onProductSelected() {
        if (this.selectedProduct) {

            const filteredProducts = this.products.filter(
                (product) =>
                    product.category === this.selectedCategory &&
                    product.name === this.selectedProduct
            );


            this.filteredSalesByMonth = new Array(12).fill(0);
            console.log("[filteredProducts]", filteredProducts)
            filteredProducts.forEach((product) => {
                this.filteredSalesByMonth[product.month - 1] += product.total;
            });


            this.updateChart();
        }
    }

    onBrandSelected() {
        if (this.selectedBrand) {

            const filteredProducts = this.products.filter(
                (product) =>
                    product.category === this.selectedCategory &&
                    product.brand === this.selectedBrand
            );


            this.filteredSalesByMonth = new Array(12).fill(0);
            filteredProducts.forEach((product) => {
                this.filteredSalesByMonth[product.month - 1] += product.total;
            });

            this.updateChart();
        }
    }
}
