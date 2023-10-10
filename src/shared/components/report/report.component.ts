import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
    @Input() reportProps: any;

    constructor() { }
    updateChart(salesByMonth: number[]) {
        const ctx = document.getElementById('barChart') as HTMLCanvasElement;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: [
                    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
                ],
                datasets: [{
                    label: 'Vendas',
                    data: salesByMonth,
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
        const mockData = {
            labels: [
                'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
                'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
            ],
            salesByMonth: [10, 20, 15, 30, 25, 12, 8, 18, 22, 14, 28, 19],
        };

        this.updateChart(mockData.salesByMonth);
    }

}
