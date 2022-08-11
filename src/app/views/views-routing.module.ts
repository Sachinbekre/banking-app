import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bank-list',
    loadChildren: () => import('./bank-list/bank-list.module')
      .then(m => m.BankListModule),
  },
  { path: '', redirectTo: 'bank-list', pathMatch: 'prefix' },
  // { path: '**', redirectTo: 'views' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
