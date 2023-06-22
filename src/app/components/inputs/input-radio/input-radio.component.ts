import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent {
  @Input() value = '';
  @Input() name = '';
  @Input() control = new FormControl(null);
  public id = uuidv4();
}
