import { Component, Input, OnInit } from '@angular/core';
import { infoContact } from 'src/app/interfaces/infoContact.inferface';

@Component({
  selector: 'app-info-contact',
  templateUrl: './info-contact.component.html',
  styles: [
  ]
})
export class InfoContactComponent implements OnInit {

  constructor() { }

  @Input('infoContact') infoContact!: infoContact;
  
  ngOnInit(): void {
    
  }

}
