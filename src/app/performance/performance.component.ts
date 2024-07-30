import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Dados para o gráfico de barras
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Engenharia Informática', 'Engenharia Civil', 'Psicologia', 'Direito'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [7500, 8500, 9500, 7000], label: 'Média de Notas' },
    { data: [500, 1000, 700, 1500], label: 'Taxa de Reprovação' }
  ];

  // Dados para o gráfico de linha
  public lineChartOptions = {
    responsive: true
  };
  public lineChartLabels = ['2018', '2019', '2020', '2021', '2022'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [5000, 6000, 7000, 8000, 9000], label: 'Taxa de Graduação' },
    { data: [4500, 5500, 6500, 7500, 8500], label: 'Taxa de Aprovação' }
  ];

  public printPage(): void {
    window.print();
  }
}
