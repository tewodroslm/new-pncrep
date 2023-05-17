import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateManagerDialogComponent } from 'src/app/dialogs/create-manager-dialog/create-manager-dialog.component';

@Component({
  selector: 'app-admin-action',
  templateUrl: './admin-action.component.html',
  styleUrls: ['./admin-action.component.scss']
})
export class AdminActionComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCreatetDialog(){
    const dialogRef = this.dialog.open(CreateManagerDialogComponent, {
      panelClass: 'custom-dialog-container',
      position: {
        left: '31%',
        top: '90px'
      },  
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       
    });
  }

}
