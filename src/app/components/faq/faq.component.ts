import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  @Input() item: any;

  @Output() onOpen: EventEmitter<any> = new EventEmitter();

  openDetails(item: any): void {
    item.isOpen = !item.isOpen;
    this.onOpen.emit(item);
  }
}
