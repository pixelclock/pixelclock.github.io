import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { dataMap } from './data.map';
@Component({
  selector: 'app-piexl',
  templateUrl: './piexl.component.html',
  styleUrls: ['./piexl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PiexlComponent implements OnInit {

  piexlSize = 15;
  rows = new Array(6).fill(1);
  columns = new Array(13).fill(1);
  offset = 21;

  @Input() value = 0;
  @Input() sec = '000000';

  constructor() { }

  ngOnInit(): void {
  }

  getTransform(value): string {
    return `translate(0, ${value * this.offset})`;
  }

  getFillColor(row: number, column: number): string {
    console.log(this.value);

    if (column === 0) {
      return this.sec[row] === '1' ? '#81c784' : '#fafafa';
    }

    const rule = dataMap[this.value];

    return rule(row, column) ? '#616161' : '#fafafa';
  }

}
