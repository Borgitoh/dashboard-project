import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public groupedBarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public groupedBarChartLabels = ['Engenharia Informática', 'Engenharia Civil', 'Psicologia', 'Direito'];
  public groupedBarChartType = 'bar';
  public groupedBarChartLegend = true;
  public groupedBarChartData = [
    { data: [150, 200, 180, 120], label: 'Inscrições' },
    { data: [100, 140, 130, 90], label: 'Matrículas' },
    { data: [80, 120, 100, 110], label: 'Propina Regularizada' },
    { data: [60, 80, 70, 60], label: 'Propina Não Regularizada' },
    { data: [20, 30, 25, 15], label: 'Multas' },
    { data: [10, 20, 15, 25], label: 'Dívidas' }
  ];


  // Dados para o gráfico de dispersão
  public scatterChartOptions = {
    responsive: true,
    scales: {
      x: {
        type: 'linear',
        position: 'bottom'
      }
    }
  };
  public scatterChartLabels = ['Idade vs. Inscrições'];
  public scatterChartType = 'scatter';
  public scatterChartData = [
    {
      data: [
        { x: 18, y: 50 },
        { x: 19, y: 75 },
        { x: 20, y: 100 },
        { x: 21, y: 120 },
        { x: 22, y: 130 },
        { x: 23, y: 110 },
        { x: 24, y: 90 },
        { x: 25, y: 80 },
        { x: 26, y: 70 },
        { x: 27, y: 60 },
        { x: 28, y: 50 },
        { x: 29, y: 40 },
        { x: 30, y: 30 }
      ],
      label: 'Candidatos',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      pointBackgroundColor: 'rgba(75, 192, 192, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
      fill: true,
    },
    {
      data: [
        { x: 18, y: 20 },
        { x: 19, y: 25 },
        { x: 20, y: 30 },
        { x: 21, y: 35 },
        { x: 22, y: 40 },
        { x: 23, y: 45 },
        { x: 24, y: 50 },
        { x: 25, y: 55 },
        { x: 26, y: 60 },
        { x: 27, y: 65 },
        { x: 28, y: 70 },
        { x: 29, y: 75 },
        { x: 30, y: 80 }
      ],
      label: 'Propinas Não Regularizadas',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      fill: true,
    }
  ];

  public printPage(): void {
    window.print();
  }
}
