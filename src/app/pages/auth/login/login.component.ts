import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('form') form!: NgForm;
  loginStatus!:boolean

  constructor(
    private authSvc:AuthService,
    private router:Router
  ){}


  //login
  submit(form:NgForm) {
    console.log(this.form);
    this.authSvc.logIn(form.value).subscribe((data)=>{
      console.log(data);
      let urlProfile:string = '/profile/' + data.user.id
      console.log(urlProfile);

      this.loginStatus = true

      setTimeout(() => {
        this.router.navigate([urlProfile])
      },3000)

    })
  }

}
