import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bank } from 'src/app/modals/Bank';
import { ConstantsUrl } from 'src/app/utils/Constant.urls';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankListService {

  constructor(
    private http:HttpClient
  ) { }


  getBankList(){
    let url = environment.BASE_URL+ ConstantsUrl.Bank_List;
    return this.http.get<Bank>(url);
  }
}
