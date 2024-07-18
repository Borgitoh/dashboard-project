import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employability',
  templateUrl: './employability.component.html',
  styleUrls: ['./employability.component.scss']
})
export class EmployabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: false },
      y: { stacked: false }
    }
  };
  public barChartLabels = ['Engenharia', 'Medicina', 'Direito', 'Administração'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {
      data: [95, 85, 75, 65,50],
      label: 'Taxa de Emprego (80%)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ];

  // Dados para o gráfico de rosca
  public doughnutChartOptions = {
    responsive: true
  };
  public doughnutChartLabels = ['Tecnologia', 'Saúde', 'Direito', 'Administração'];
  public doughnutChartType = 'doughnut';
  public doughnutChartLegend = true;
  public doughnutChartData = [
    {
      data: [30, 25, 20, 25],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }
  ];

  public printPage(): void {
    window.print();
  }
}
