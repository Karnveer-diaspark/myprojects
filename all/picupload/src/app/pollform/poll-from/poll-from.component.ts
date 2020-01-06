import { Component, OnInit, ChangeDetectorRef, EventEmitter, ViewChild, ElementRef, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { PollRegisterService } from 'src/app/service/poll-register/poll-register.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerInputEvent } from '@angular/material';
import { ImagePreviewComponent } from '../cropper-popup/image-preview/image-preview.component';

import { formatDate } from '@angular/common';


import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortalDirective, ComponentPortal } from '@angular/cdk/portal';
import { Router } from '@angular/router';

export interface DialogData {
  selectFile: any
  child: string;
}

@Component({
  selector: 'app-poll-from',
  templateUrl: './poll-from.component.html',
  styleUrls: ['./poll-from.component.css']
})

export class PollFromComponent implements OnInit {

  ram: string = "aman"
  selectedFile = null;
  isUploaded: boolean = false;
  croppedImage: any;
  imageChangedEvent: any;
  minDate: any;
  maxDate: any;
  currentDate: any;
  isImageSelected: boolean;
  poll: FormGroup;
  events: string[] = [];


  overlayRef: OverlayRef;

  constructor(
    private formBuilder: FormBuilder,
    public overlay: Overlay,
    public dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private pollService: PollRegisterService,
    private router: Router
  ) {

  }

  ngOnInit() {

    // this.minDate = formatDate(new Date(), 'yyyy/MM/dd', 'en');
    this.minDate = new Date();

    console.log(this.currentDate);
    this.maxDate = new Date()
    this.maxDate.setDate(this.minDate.getDate() + 2)

    this.poll = this.formBuilder.group({
      community: ["", Validators.required],
      areaOfInterest: ["", Validators.required],
      startdate: ["", Validators.required],
      enddate: ["", Validators.required]
    })
  }

  setDate() {
    console.log("working")
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${event.value.getDate()}`);
    let changedDate = this.events.pop();
    this.maxDate.setDate(+changedDate + 2);
  }

  /*Form reqiured error*/
  public hasError = (controlName: string, errorName: string) => {
    return this.poll.controls[controlName].hasError(errorName);
  }


  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.imageChangedEvent = event;
      console.log(this.selectedFile);
      this.isImageSelected = true
      this.openDialog();
    }
  }

  onUpload(event) {
    this.isUploaded = event;
  }

  onSubmit() {
    console.log("onSubmit() values: ", this.poll.value);
  }

  onSelect(event) {
    console.log(event.target.value)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImagePreviewComponent, {
      width: '500px',
      height: '500px',
      data: { selectfile: this.selectedFile }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.croppedImage = localStorage.getItem('img')

    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
