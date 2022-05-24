import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LithuanianComponent } from './lithuanian/lithuanian.component';

const routes: Routes = [
  { path: 'lt', component: LithuanianComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
