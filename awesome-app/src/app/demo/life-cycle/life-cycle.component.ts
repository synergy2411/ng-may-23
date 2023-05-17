import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
})
export class LifeCycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() title: string;

  @ViewChild('heading') headingEl: ElementRef;

  @ContentChild('content') content: ElementRef;

  constructor() {
    console.log('CONSTRUCTOR');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);

    // console.log('ON CHANGE : ', this.headingEl.nativeElement);
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log('CONTENT INIT : ', this.content.nativeElement);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit', this.headingEl.nativeElement);
    // console.log('VIEW INIT CONTENT : ', this.content.nativeElement);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log('INIT CONTENT : ', this.content.nativeElement);
  }
}
