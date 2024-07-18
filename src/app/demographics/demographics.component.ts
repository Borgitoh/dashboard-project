import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})
export class DemographicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pieChartOptions = {
    responsive: true
  };
  public pieChartLabels = ['Masculino', 'Feminino', 'Outro'];
  public pieChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData = [
    {
      data: [55, 40, 5],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }
  ];

  // Dados para o gráfico de área
  public areaChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: false },
      y: { stacked: false }
    }
  };
  public areaChartLabels = ['2018', '2019', '2020', '2021', '2022'];
  public areaChartType = 'line';
  public areaChartLegend = true;
  public areaChartData = [
    {
      data: [1000, 1200, 1400, 1600, 1800],
      label: 'Matrículas',
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ];

}
