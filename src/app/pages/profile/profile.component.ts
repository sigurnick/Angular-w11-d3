import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IRegister } from '../auth/interfaces/register';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user$!:any
  private userSubscription!: Subscription

  constructor(

    private auth: AuthService){
    }

  ngOnInit() {

     this.auth.restoreUser()

   this.user$ = this.auth.user$
   console.log(this.user$);


  //  this.auth.user$.subscribe((dati)=>{
  //   this.user$ = dati?.user

  //   console.log('dati',this.user$);

  //  })


// this.userSubscription = this.user$.subscribe((data)=>{

// })




  }




}
