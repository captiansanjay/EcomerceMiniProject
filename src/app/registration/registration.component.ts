import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg = '';
  constructor(private _service: RegistrationService, private _route: Router) { }

  ngOnInit(): void {
  }
  UserRegister() {
    alert("fffg")
    console.log(this.user.emailid)
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("rsponce reciveed");
        this._route.navigate(['login'])

      },

      error => {
        console.log("exception occuerd")
        this.msg = "Bad credentials!!!!!!!!";
      }
    );
  }

}
