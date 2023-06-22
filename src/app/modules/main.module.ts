import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoComponent} from "../components/info/info.component";
import {FeatureComponent} from "../components/feature/feature.component";
import {MainPageComponent} from "../pages/main-page/main-page.component";
import {AboutComponent} from "../components/about/about.component";
import {TeamComponent} from "../components/team/team.component";
import {RatingComponent} from "../components/rating/rating.component";
import {BlogComponent} from "../components/blog/blog.component";
import {InputLineComponent} from "../components/inputs/input-line/input-line.component";
import {InputTextareaComponent} from "../components/inputs/input-textarea/input-textarea.component";
import {FooterComponent} from "../components/footer/footer.component";
import {ContactsComponent} from "../components/contacts/contacts.component";
import {InputRadioComponent} from "../components/inputs/input-radio/input-radio.component";
import {CheckDatePipe} from "../pipes/check-date.pipe";
import {HtmlSanitizerPipe} from "../pipes/html-sanitizer.pipe";
import {TimerComponent} from "../components/timer/timer.component";
import {NotifyComponent} from "../components/notify/notify.component";
import {SpinnerSmallComponent} from "../components/spinner-small/spinner-small.component";
import {CallComponent} from "../components/call/call.component";
import {ChartComponent} from "../components/chart/chart.component";
import {NavbarComponent} from "../components/navbar/navbar.component";
import {FaqComponent} from "../components/faq/faq.component";
import {TableComponent} from "../components/table/table.component";
import {TableHeadComponent} from "../components/table/table-head/table-head.component";
import {TableLineComponent} from "../components/table/table-line/table-line.component";
import {FilterPipe} from "../pipes/filter.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../components/header/header.component";
import {ScrollDirective} from "../directives/scroll.directive";
import {LoaderComponent} from "../components/loader/loader.component";
import {RoadmapComponent} from "../components/roadmap/roadmap.component";
import {TradingComponent} from "../components/trading/trading.component";
import {AdvantagesComponent} from "../components/advantages/advantages.component";


const components = [

  InfoComponent,
  FeatureComponent,
  MainPageComponent,
  AboutComponent,
  TeamComponent,
  RatingComponent,
  BlogComponent,
  InputLineComponent,
  InputTextareaComponent,
  FooterComponent,
  ContactsComponent,
  InputRadioComponent,
  CheckDatePipe,
  HtmlSanitizerPipe,
  TimerComponent,
  NotifyComponent,
  SpinnerSmallComponent,
  CallComponent,
  ChartComponent,
  NavbarComponent,
  FaqComponent,
  TableComponent,
  TableHeadComponent,
  TableLineComponent,
  FilterPipe,
  HeaderComponent,
  ScrollDirective,
  LoaderComponent,
  RoadmapComponent,
  TradingComponent,
  AdvantagesComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ...components
  ]
})
export class MainModule { }
