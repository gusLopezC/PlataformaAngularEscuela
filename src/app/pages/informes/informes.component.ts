import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.css']
})
export class InformesComponent implements OnInit {
  chartOptions = {
    responsive: true
  };
  chartData = [
    { data: [0, 69, 84, 70], label: 'Grupo A' },
    { data: [0, 75, 89, 95], label: 'Grupo B' },
    { data: [0, 60, 90, 70], label: 'Grupo C' }
  ];

  chartLabels = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre'];

  chartData1 = [
    { data: [0, 69, 84, 70], label: 'Bloque 1' },
    { data: [0, 75, 89, 95], label: 'Bloque 2' },
    { data: [0, 60, 90, 70], label: 'Bloque 3' }
  ];

  chartLabels1 = ['Bloque 1', 'Bloque 2', 'Bloque 3'];

  chartData2 = [
    { data: [0, 84, 90], label: 'Grobal' },
    { data: [0, 89, 95], label: 'Grupo' },
  ];

  chartLabels2 = ['', 'Grobal', 'Grupo'];

  chartData3 = [
    { data: [0, 80, 80], label: 'Grobal' },
    { data: [0, 77, 74], label: 'Grupo' },
  ];

  chartLabels3 = ['', 'Grobal', 'Grupo'];

  onChartClick(event) {
    console.log(event);
  }
  constructor() { }

  ngOnInit() {
  }

}
