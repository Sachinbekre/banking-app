import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Bank } from 'src/app/modals/Bank';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss'],
})
export class BankDetailsComponent implements OnInit {
  @Input() bankadata: Bank;
  dataSource = new MatTableDataSource<Bank>([]);
  @Output() updatedData = new EventEmitter<any>();
  displayedColumns: string[] = [
    'id',
    'name',
    'acc_number',
    'routing_number',
    'swift_bic',
    'comment',
    'date',
  ];
  commentedDate = new Date();
  public comment:string ='';
  public bankDetailsForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.init();
    let validPattern = /^[a-zA-Z0-9_ ]*$/;
    this.bankDetailsForm = this.formBuilder.group({
      comment: ["", Validators.compose([Validators.required,Validators.pattern(validPattern)])],
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.bankDetailsForm.controls[controlName].hasError(errorName);
  }

  init() {
    this.dataSource.data = [this.bankadata];
    this.comment = this.bankadata.comment;
    this.commentedDate = this.bankadata.dateTime;
  }

  save() {
    this.dataSource.data[0].comment = this.comment;
    this.dataSource.data[0].dateTime = new Date();
    this.updatedData.emit(this.dataSource.data);
  }

  cancel(){
    this.updatedData.emit(false);
  }



  onPaste(e:any) {
    e.preventDefault();
    return false;
  }
}
