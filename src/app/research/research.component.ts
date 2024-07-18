import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   // Dados para o gráfico de colunas agrupadas
   public groupedColumnChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: false },
      y: { stacked: false }
    }
  };
  public groupedColumnChartLabels = ['Dept A', 'Dept B', 'Dept C', 'Dept D'];
  public groupedColumnChartType = 'bar';
  public groupedColumnChartLegend = true;
  public groupedColumnChartData = [
    {
      data: [30, 50, 80, 60],
      label: 'Publicações 2021',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    },
    {
      data: [40, 60, 70, 80],
      label: 'Publicações 2022',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
  ];

  // Dados para o gráfico de barras horizontais
  public horizontalBarChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: false },
      y: { stacked: false }
    }
  };
  public horizontalBarChartLabels = ['2018', '2019', '2020', '2021', '2022'];
  public horizontalBarChartType = 'horizontalBar';
  public horizontalBarChartLegend = true;
  public horizontalBarChartData = [
    {
      data: [5, 10, 15, 20, 25],
      label: 'Patentes Registradas',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1
    }
  ];


}
