import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InputComponent implements OnInit, AfterViewInit {

  @Input() input: HTMLInputElement = null;
  @ViewChild('input') private _input: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.input = this._input.nativeElement;
  }
}
