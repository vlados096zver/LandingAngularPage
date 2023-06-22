import {Component, OnInit} from '@angular/core';
import {IFeature} from "../../models/feature.model";
import {feature} from "../../data/feature";
import {rating} from "../../data/rating";
import {faq} from "../../data/faq";
import {roadmap} from "../../data/roadmap";
import {IRating} from "../../models/rating.model";
import {ITeam} from "../../models/team.model";
import {IBlog} from "../../models/blog.model";
import {IFaq} from "../../models/faq.model";

import {IRoadmap} from "../../models/roadmap.model";
import { ChartType } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import {RequestsService} from "../../service/requests.service";
import {forkJoin} from "rxjs";
import {IAdvantage} from "../../models/advantage.model";
import {advantages} from "../../data/advantage";

Chart.register(...registerables);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public data$: any = [];

  constructor(
    public requestsService: RequestsService
  ) {
     forkJoin([
      this.requestsService.getUsers(),
      this.requestsService.getBlogPost(),
    ]).subscribe({
       next: (res: any)=> {
        this.data$ = res;
       }
     })

  }

  feature: IFeature[] = feature;
  advantages: IAdvantage[]  = advantages;
  rating: IRating[] = rating;
  team: ITeam[] = [];
  blog: IBlog[] = [];
  faq: IFaq[] = faq;
  roadmap: IRoadmap[] = roadmap;
  tabs = ['General', 'Token', 'Client', 'Pre ICO', 'Legal'];
  activeTab = 0;

  chartInfo1: any[] = [];

  chartInfo2 = [{
    data: [55, 49, 44, 24, 15],
    labels: ['Italy', 'France', 'Spain', 'USA', 'Argentina'],
    lineChartType: "doughnut",
    background: [
      '#2ac14d',
      '#edb019',
      '#ec5a00',
      '#f37300',
      '#08a1e8'
    ]
  }
  ]

  changeState(state: number) {
    this.activeTab = state;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.chartInfo1 = [{
        data: [40, 49, 44, 24, 15],
        labels: ['Contingency', 'France', 'Spain', 'USA', 'Argentina'],
        lineChartType: "polarArea",
        background: [
          '#ac15d2',
          '#00a2e2',
          '#00dca1',
          '#fcb000',
          '#ff5e0d'
        ]
      }]
    }, 1000)

    setTimeout(()=>{
      this.chartInfo1 = [{
        data: [60, 89, 104, 224, 15],
        labels: ['Contingency', 'France', 'Spain', 'USA', 'Argentina'],
        lineChartType: "polarArea",
        background: [
          '#ac15d2',
          '#00a2e2',
          '#00dca1',
          '#fcb000',
          '#ff5e0d'
        ],
        image: 'assets/img/shape11.png'
      }]
    }, 3000)
  }
  scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  onOpen(item:any) {
    this.faq = this.faq.map((elem:any) => {
      if (item.type === elem.type && item.id !== elem.id) {
        elem.isOpen = false;
      }
      return elem;
    })
  }
  trackByFn(index:number, item:any) {
    return item.id;
  }
}
