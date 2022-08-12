import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss']
})
export class ErrorHandlerComponent implements OnInit, OnChanges  {
  @Input() errorMessage!: any;
  constructor() { }

  ngOnInit(): void {
    console.log("error message",this.errorMessage)
  }
  // ngOnchanges(changes: SimpleChanges) {
  //   console.log("error message",this.errorMessage)// here you will get the data from parent once the input param is change
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("error message",this.errorMessage)
  }
  // ngAfterViewInit(): void {
  //   console.log("error message",this.errorMessage)
  // }

}
