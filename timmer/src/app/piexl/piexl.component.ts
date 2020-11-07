import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piexl',
  templateUrl: './piexl.component.html',
  styleUrls: ['./piexl.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PiexlComponent implements OnInit {

  piexlSize = 15;
  rows = new Array(6).fill(1);
  colums = new Array(13).fill(1);
  offset = 21;

  constructor() { }

  ngOnInit(): void {
  }

  getTransform(value): string {
    return `translate(0, ${value * this.offset})`;
  }

}
