import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  id!: number;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = + !params.get('id');
    });

    console.log(this.id);

  }

}
