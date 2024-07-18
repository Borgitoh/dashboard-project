import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Dados para o gráfico de área empilhada
  public stackedAreaChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  };
  public stackedAreaChartLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  public stackedAreaChartType = 'line';
  public stackedAreaChartLegend = true;
  public stackedAreaChartData = [
    {
      data: [3000, 3200, 3300, 3400, 3500, 3700],
      label: 'Mensalidades',
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: 'origin',
      borderWidth: 1
    },
    {
      data: [1200, 1300, 1400, 1500, 1600, 1700],
      label: 'Doações',
      backgroundColor: 'rgba(54, 162, 235, 0.4)',
      borderColor: 'rgba(54, 162, 235, 1)',
      fill: 'origin',
      borderWidth: 1
    },
    {
      data: [800, 900, 1000, 1100, 1200, 1300],
      label: 'Subsídios',
      backgroundColor: 'rgba(255, 159, 64, 0.4)',
      borderColor: 'rgba(255, 159, 64, 1)',
      fill: 'origin',
      borderWidth: 1
    }
  ];

  // Dados para o gráfico de barra empilhada
  public stackedBarChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true }
    }
  };
  public stackedBarChartLabels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  public stackedBarChartType = 'bar';
  public stackedBarChartLegend = true;
  public stackedBarChartData = [
    {
      data: [5000, 5200, 5400, 5600, 5800, 6000],
      label: 'Salários',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      data: [1500, 1600, 1700, 1800, 1900, 2000],
      label: 'Infraestrutura',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    },
    {
      data: [1200, 1300, 1400, 1500, 1600, 1700],
      label: 'Pesquisa',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ];

}