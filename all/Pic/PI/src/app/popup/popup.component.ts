import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { FormGroup,ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  // registerForm:FormGroup;
  user:Observable<[any]>;
  model: any = {};

  dataSaved = false;
  massage:string;

  constructor(public dialog: MatDialog,private formBuilder: FormBuilder, private userservice:UserserviceService, private router:Router) { }

  ngOnInit() {
  //   this.registerForm = this.formBuilder.group({
  //     Firstname: ['', Validators.required],
  //     Lastname: ['', Validators.required],
  //     Email: ['', [Validators.required, Validators.email]],
  //     Mobile: ['', Validators.required],
  //     Password: ['', [Validators.required, Validators.minLength(6)]]
  // });
  }

  onSubmit(user:User){
   console.log(this.model)
   debugger
   this.userservice.createUser(this.model).subscribe(
    (res) => {
        alert("saved");
        //this.form.reset();
    },
    (err)=>{
      alert("not saved");
    });
  }

  login(){
    this.router.navigate(['login'])
  }
}


