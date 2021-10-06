import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styles: [
  ]
})
export class SkillComponent implements OnInit {

  constructor() { }


  @Input('skill') skill!:Skill
  
  ngOnInit(): void {
  }

}
