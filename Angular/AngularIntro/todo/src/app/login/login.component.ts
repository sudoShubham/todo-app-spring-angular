import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'sudoRoot'
  password = ''
  invalidLogin = false;
  errorMessage = "Invalid Login"

  constructor(private router: Router, private HardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  ngOnInit(): void {
  }


  handleLogin() {
    if (this.HardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }


  handleBasicAuthLogin() {
    this.basicAuthenticationService.excecuteBasicAuthenticationService(this.username, this.password).subscribe(res => {
      console.log(res);
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }, err => {
      console.log(err)
      this.invalidLogin = true
    })

  }



}


