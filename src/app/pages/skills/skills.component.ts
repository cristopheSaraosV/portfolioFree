import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styles: [
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }


  skills!: Skill[];

  ngOnInit(): void {
    this.skills = [
        {
            name:'Angular',
            description:'Angular Basic Management',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
        },
        {
            name:'Typescript',
            description:'Typescript Basic Managemet',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
        },
        {
            name:'HTML5 and CSS3',
            description:'Basic Managemet',
            img:'https://cdn-icons-png.flaticon.com/512/1216/1216733.png'
        },
        {
            name:'Express',
            description:'Express Basic Management',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png'
        },
    ]
}

}
