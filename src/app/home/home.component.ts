import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public totalEstudantes: number = 10200; // Exemplo de valor formatado
  public estudantesMatriculados: number = 10800;
  public numeroReprovados: number = 10900;
  public desistentes: number = 102;

  constructor() { }

  ngOnInit() {
  }

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Propina Regularizada' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Propina não Regularizada' },
    { data: [33, 25, 45, 58, 72, 35, 60], label: 'Propina em Atraso' }, // Novo conjunto de dados
    { data: [12, 15, 20, 30, 25, 18, 22], label: 'Estudantes com Bolsa' } // Outro novo conjunto de dados
  ];

  public lineChartLabels: Array<any> = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors: Array<any> = [
    { // red
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(54,162,235,0.2)',
      borderColor: 'rgba(54,162,235,1)',
      pointBackgroundColor: 'rgba(54,162,235,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54,162,235,0.8)'
    },
    { // green
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: 'rgba(75,192,192,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(75,192,192,0.8)'
    },
    { // purple
      backgroundColor: 'rgba(153,102,255,0.2)',
      borderColor: 'rgba(153,102,255,1)',
      pointBackgroundColor: 'rgba(153,102,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(153,102,255,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType = 'line';

}
