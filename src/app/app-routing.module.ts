import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'views',
    loadChildren: () => import('./views/views.module')
      .then(m => m.ViewsModule),
  },
  { path: '', redirectTo: 'views', pathMatch: 'prefix' },
  { path: '**', redirectTo: 'views' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
