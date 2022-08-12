import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatTableDataSource} from '@angular/material/table';
import { OAuthService } from 'angular-oauth2-oidc';
import { Bank } from 'src/app/modals/Bank';
import { BankListService } from './bank-list.service';


@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
})
export class BankListComponent implements OnInit, AfterViewInit {
  title:string = 'Bank List'
  displayedColumns: string[] = ['id', 'name', 'comment', 'action'];
  dataSource = new MatTableDataSource<Bank>([]);
  viewBankList: number = 0;
  bankadata: Bank;
  bankListData: Bank[] = [];
  errorMessage:any;
  loader:boolean=false;
  @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;

  constructor(
    private _banklistService: BankListService,
    private ref: ChangeDetectorRef,
    private oauthService:OAuthService,
    private _snackBar: MatSnackBar,
    ) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.loader = true;
    this._banklistService.getBankList().subscribe(
      (res: any) => {
        this.loader = false;
        if (res.length > 0) {
          this.dataSource.data = res;
          this.bankListData = res;
          this.ref.detectChanges();
          this.dataSource.paginator = this.paginator;
        }else{
          this.errorMessage = res.error?res.error:'No data available in the table';
          this.viewBankList = 2;
          this.toaster(this.errorMessage);
        }
      },
      (err) => {
        this.viewBankList = 2;
        this.loader = false;
        this.errorMessage = err.message;
        this.toaster(err.message);
      }
    );
  }

  toaster(msg:string){
    this._snackBar.open(msg, '', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewBank(ele: Bank) {
    this.viewBankList = 1;
    this.title = 'Bank Details';
    this.bankadata = ele;
  }

  public getChildData(value: any): void {
    if(!value){
      this.viewBankList = 0;
    }else{
      const idx = this.bankListData.findIndex((x) => x.id === value[0].id);
      this.viewBankList = 0;
      this.title = 'Bank List';
      this.ref.detectChanges();
      this.dataSource.paginator = this.paginator;
      this._snackBar.open('Comments Updated Successfuly', '', {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent']
      });
    }

  }

  logout(){
    this.oauthService.logOut();
  }
}

