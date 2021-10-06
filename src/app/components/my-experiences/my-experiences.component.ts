import { Component, Input, OnInit } from '@angular/core';
import { workExperience } from 'src/app/interfaces/workExperience.interface';

@Component({
  selector: 'app-my-experiences',
  templateUrl: './my-experiences.component.html',
  styles: [
  ]
})
export class MyExperiencesComponent implements OnInit {

  constructor() { }

  @Input('workExperience') workExperience!:workExperience[];
  
  ngOnInit(): void {
  }

}
