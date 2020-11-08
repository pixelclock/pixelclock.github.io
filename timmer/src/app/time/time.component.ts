import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { dataMap, colorMap } from '../core/data.map';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeComponent implements OnInit, OnChanges {

  @Input() value = '01';
  @Input() sec = '000000';
  fillColor = '#616161';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.value) {
      const index = Math.floor((Math.random() * 1000) % 39);

      this.fillColor = colorMap[index];
    }
  }

}
