import { Component, OnInit, ChangeDetectorRef, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { PollRegisterService } from 'src/app/service/poll-register/poll-register.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ImagePreviewComponent } from '../cropper-popup/image-preview/image-preview.component';

export interface DialogData {
  selectFile: any
  child: string;
}

@Component({
  selector: 'app-poll-from',
  templateUrl: './poll-from.component.html',
  styleUrls: ['./poll-from.component.css']
})

// @Directive({ selector: '[ng2FileSelect]' })
export class PollFromComponent implements OnInit {


  ram: string = "aman"
  selectedFile = null;
  isUploaded: boolean = false;
  croppedImage: any;
  imageChangedEvent: any;
  isImageSelected: boolean;


  pollform:FormGroup




  constructor(private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private cd: ChangeDetectorRef,
    private pollService: PollRegisterService,
  ) {

  }

  ngOnInit() {
    this.pollform = new FormGroup({
      
      Community : new FormControl('', [Validators.required]),
      AreaofInterest: new FormControl('', [Validators.required]),
      PollQuestion: new FormControl('', [Validators.required]),
      StartDate: new FormControl('', [Validators.required]),
      EndDate: new FormControl('', [Validators.required])
    })
  }


  /*Form reqiured error*/
  public hasError = (controlName: string, errorName: string) =>{
    return this.pollform.controls[controlName].hasError(errorName);
  }

  
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.imageChangedEvent = event;
      console.log(this.selectedFile);
      this.isImageSelected = true
    }
  }

  onUpload(event){
    this.isUploaded = event;
  }


  onSubmit() {
    console.log(this.pollform.value);
    this.pollform.reset();
  }


  onSelect(event) {
    console.log(event.target.value)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImagePreviewComponent, {
      width: '700px',
      height: '700px',
      data: { selectfile: this.selectedFile }
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.croppedImage = localStorage.getItem('img')

      /// this.animal = result;
    });
  }
}
