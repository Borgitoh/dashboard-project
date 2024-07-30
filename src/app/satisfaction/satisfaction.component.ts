import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-satisfaction',
  templateUrl: './satisfaction.component.html',
  styleUrls: ['./satisfaction.component.scss']
})
export class SatisfactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // Dados para o gráfico de barras agrupadas
  public groupedBarChartOptions = {
    responsive: true,
    scales: {
      x: { stacked: false },
      y: { stacked: false }
    }
  };
  public groupedBarChartLabels = ['2018', '2019', '2020', '2021', '2022'];
  public groupedBarChartType = 'bar';
  public groupedBarChartLegend = true;
  public groupedBarChartData = [
    {
      data: [85, 87, 86, 88, 90],
      label: 'Satisfação dos Alunos (%)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    },
    {
      data: [70, 75, 80, 82, 85],
      label: 'Satisfação do Corpo Docente (%)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
  ];

  // Dados para o gráfico de radar
  public radarChartOptions = {
    responsive: true
  };
  public radarChartLabels = ['Condições de Trabalho', 'Recursos', 'Treinamento', 'Oportunidades de Pesquisa'];
  public radarChartType = 'radar';
  public radarChartLegend = true;
  public radarChartData = [
    {
      data: [80, 75, 85, 90],
      label: 'Satisfação do Corpo Docente',
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1
    }
  ];

  public printPage(): void {
    window.print();
  }
}
