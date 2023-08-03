import { IProfile } from './../auth/interfaces/profile';
import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IRegister } from '../auth/interfaces/register';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  allUsers!: any
  grifondoro:string = "Grifondoro"

  constructor(private auth: AuthService){}

  ngOnInit() {
    this.getAllUsersData()
  }


getAllUsersData() {
  this.auth.getAllUsers().subscribe((data)=>{
    this.allUsers = data
    console.log(this.allUsers);

  })

}

}
