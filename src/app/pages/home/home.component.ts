import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  profile!: profile;

  ngOnInit(): void {
      this.profile = {
          name:'Cristopher Saraos',
          description:'I am a self-taught in web development, I love angular and try to learn something new every day.',
          img:'../../../assets/img/profile.jpg',
          profession:'Web developer',

      }
  }

}
