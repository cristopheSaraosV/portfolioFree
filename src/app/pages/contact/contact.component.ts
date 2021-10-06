import { Component, OnInit } from '@angular/core';
import { infoContact } from 'src/app/interfaces/infoContact.inferface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }


  infoContact!: infoContact ;

  ngOnInit(): void {
    this.infoContact = {
        email:'cristopher.saraos@gmail.com',
        nationality:'Chilean',
        number:56957332633
    }
}

}
