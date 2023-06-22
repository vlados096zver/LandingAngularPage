import {Component, ElementRef, Input, ViewChild, HostListener} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.chartBlock.resize();
  }

  public _info:  any = [];
  public chartBlock: any;
  @Input() name = '';

  @Input() set info(info: any) {
    this._info = info;
     const paramsChart: any[] = [
      {
        label: '# of Votes',
        data: this._info[0].data,
        backgroundColor: this._info[0].background,
        borderWidth: 1,
        borderColor: '#fff',
      },
    ]

    const chart = this.canvas.nativeElement.getContext('2d');
    if (chart !== null && this._info) {
      if (this.chartBlock) {
        this.chartBlock.data.labels = this._info[0].labels;
        this.chartBlock.data.datasets = paramsChart;
        this.chartBlock.update();
        return;
      }

      this.chartBlock = new Chart(chart, {
        type: this._info[0].lineChartType,
        data: {
          labels: this._info[0].labels,
          datasets: paramsChart
        },
      });
    }
  }
  constructor() {}

}
