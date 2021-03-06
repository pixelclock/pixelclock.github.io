import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {

  hour = '00';
  min = '00';
  sec = '00';
  sub = new Subscription();

  @ViewChild('container', { static: true }) container: ElementRef;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const timeSub = interval(1000).pipe(
      tap(() => {
        const date = new Date();
        this.hour = ('' + date.getHours()).padStart(2, '0');
        this.min = ('' + date.getMinutes()).padStart(2, '0');
        this.sec = date.getSeconds().toString(2).padStart(6, '0');
        this.cdr.detectChanges();
      })
    ).subscribe();
    this.sub.add(timeSub);

    console.log(this.container.nativeElement.clientHeight)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
