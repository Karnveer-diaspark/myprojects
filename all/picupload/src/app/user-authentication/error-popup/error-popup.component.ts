import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: ['./error-popup.component.css']
})
export class ErrorPopupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  onClick(){
    this.dialog.closeAll();
  }
}
