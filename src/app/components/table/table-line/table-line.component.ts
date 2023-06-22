import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-table-line',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.scss']
})
export class TableLineComponent {
  @Input() item: any;
}
