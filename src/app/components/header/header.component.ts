import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  user$!:any

  constructor(

    private auth: AuthService){}

  ngOnInit() {

     this.auth.restoreUser()

   this.user$ = this.auth.user$




  }
}
