import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user';

@Component({
  selector: 'app-detailusers',
  templateUrl: './detailusers.component.html',
  styleUrls: ['./detailusers.component.css']
})
export class DetailusersComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetailusersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User)
     { }

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
