import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListusersComponent } from './listusers/listusers.component';
import { DetailusersComponent } from './detailusers/detailusers.component';
import { FormsModule } from '@angular/forms';
import { FiltroPipe } from './pipes/filtro.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    ListusersComponent,
    DetailusersComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    HttpClientModule
    
  ]
})
export class UserModule { }
