import { Component, Input, OnInit } from '@angular/core';
import { personalSkill } from 'src/app/interfaces/personalSkill.interface';

@Component({
  selector: 'app-personal-skills',
  templateUrl: './personal-skills.component.html',
  styles: [
  ]
})
export class PersonalSkillsComponent implements OnInit {

  constructor() { }

  @Input('personalSkill') personalSkill!: personalSkill; 
  
  ngOnInit(): void {
  }

}
