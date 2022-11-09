import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListusersComponent } from './user/listusers/listusers.component';

const routes: Routes = [
  { path: 'users', component: ListusersComponent },

  { path: '', redirectTo: '/users', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
