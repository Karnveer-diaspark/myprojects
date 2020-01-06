import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { MatDialog } from '@angular/material';
import { ErrorPopupComponent } from '../error-popup/error-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private routes: Router, private loginService: LoginService, public dialog: MatDialog) {
  }

  ngOnInit() {

    if (this.loginService.getToken) {
      this.routes.navigate(['poll-form']);
    }

    this.login = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }


  get f() { return this.login.controls; }
  public hasError = (controlName: string, errorName: string) => {
    return this.login.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.submitted = true;
    // this.login.invalid
    if (this.login.invalid) {
      return;
    } else {
      console.log(this.login.value)
      if (this.login.value.username === "admin@webdunia.com" && this.login.value.password === "admin123") {
        localStorage.setItem('token', 'xx.yy.xx');
        this.routes.navigate(['poll-form']);
      }
      else {
        {
          const dialogRef = this.dialog.open(ErrorPopupComponent, {
            width: '300px',
            //data: {name: this.name, animal: this.animal}
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
          this.login.reset();
        }
      }
    }
  }
}
