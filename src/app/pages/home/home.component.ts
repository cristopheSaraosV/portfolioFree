import { Component, OnInit } from '@angular/core';
import { personalSkill } from 'src/app/interfaces/personalSkill.interface';
import { profile } from 'src/app/interfaces/profile.interface';
import { workExperience } from 'src/app/interfaces/workExperience.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  profile!: profile;
  workExperience!: workExperience[];
  personalSkill!: personalSkill[];

  ngOnInit(): void {
      this.profile = {
          name:'Cristopher Saraos',
          description:'I am a self-taught in web development, I love angular and try to learn something new every day.',
          img:'../../../assets/img/profile.jpg',
          profession:'Web developer',

      };

      this.workExperience = [
          {
              company:'Siigroup',
              admissionDate:'20/10/2020',
              departureDate:'06/02/2021',
              workPosition:'Programmer analyst'
          },
          {
            company:'Siigroup',
            admissionDate:'20/10/2020',
            departureDate:'06/02/2021',
            workPosition:'Programmer analyst'
        }
      ];

      this.personalSkill = [
          {
              name:'Mourn',
              description:'I cry every time, my phrase is always a time to cry.'
          }
      ]
  }

}
