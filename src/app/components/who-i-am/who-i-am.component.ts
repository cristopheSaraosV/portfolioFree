import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-i-am',
  templateUrl: './who-i-am.component.html',
  styles: [
  ]
})
export class WhoIAmComponent implements OnInit {

  constructor() { }


  @Input('name') name:string = 'Your name'
  @Input('description') description:string = 'your description'
  @Input('profession') profession:string = 'your description'
  @Input('img') img:string = 'your img'

  ngOnInit(): void {
      
  }

}
