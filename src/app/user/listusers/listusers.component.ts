import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DetailusersComponent } from '../detailusers/detailusers.component';
import { ListusersService } from '../services/listusers.service';
import { User } from '../user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css']
})
export class ListusersComponent implements OnInit {

  filtroPost = '';
  usuario!: User[];
  dataSource:any;

  constructor(
    public dialog: MatDialog,
    private userService: ListusersService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any)=>{

      this.usuario=data;
    });
  }

  cardDetails(user: any){
    const dialogRef = this.dialog.open(DetailusersComponent, {
      disableClose: false,
      hasBackdrop: true,
      backdropClass: '',
      width: '60%',
      height: '',
      position: {
          top: '',
          bottom: '',
          left: '',
          right: '',

      },
      data: user,
      });
      dialogRef.afterClosed().subscribe(result => {
      });
  }

}
