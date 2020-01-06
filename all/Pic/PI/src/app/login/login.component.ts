import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  Data: any;
  model: any = {};
  user: Observable<any[]>;
  Id: any;

  constructor(private router: Router, private userservice: UserserviceService) { }

  ngOnInit() {
    this.Table()
  }

  clickToRegister() {
    this.router.navigate(['popup']);
  }
  login() {
    this.userservice.loginUser(this.model).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
  }


  Table() {
    this.user = this.userservice.getAll();
  }
  DeleteUser(Id: any) {
    debugger
    {
      this.userservice.DeleteUser(Id).subscribe(
        (res) => {
          this.Data=res;
          this.Table();
          console.log(res)
        });
    }

  }
}
