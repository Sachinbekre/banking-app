import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Bank } from 'src/app/modals/Bank';
import { BankListService } from './bank-list.service';


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
})
export class BankListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'comment', 'action'];
  dataSource = new MatTableDataSource<Bank>([]);
  viewBankList: boolean = true;
  bankadata!: Bank;
  bankListData: Bank[] = [];
  @ViewChild(MatPaginator,{ static: false }) paginator!: MatPaginator;

  constructor(
    private _banklistService: BankListService,
    private ref: ChangeDetectorRef
    ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this._banklistService.getBankList().subscribe(
      (res: any) => {
        if (res) {
          this.dataSource.data = res;
          this.bankListData = res;
        }
      },
      (err) => {}
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewBank(ele: Bank) {
    this.viewBankList = false;
    this.bankadata = ele;
  }

  public getChildData(value: any): void {
    const idx = this.bankListData.findIndex((x) => x.id === value[0].id);
    this.viewBankList = true;
    this.ref.detectChanges();
    this.dataSource.paginator = this.paginator;
  }
}

