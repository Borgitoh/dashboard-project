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
  public barChartLabels = ['Curso A', 'Curso B', 'Curso C', 'Curso D'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [75, 85, 95, 70], label: 'Média de Notas' },
    { data: [5, 10, 7, 15], label: 'Taxa de Reprovação' }
  ];

  // Dados para o gráfico de linha
  public lineChartOptions = {
    responsive: true
  };
  public lineChartLabels = ['2018', '2019', '2020', '2021', '2022'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [50, 60, 70, 80, 90], label: 'Taxa de Graduação' },
    { data: [45, 55, 65, 75, 85], label: 'Taxa de Aprovação' }
  ];

}
