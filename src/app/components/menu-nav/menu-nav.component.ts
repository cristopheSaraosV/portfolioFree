import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interfaces';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styles: [
  ]
})
export class MenuNavComponent implements OnInit {

  constructor() { }


  menuItem!:Menu[]

  ngOnInit(): void {
     this.menuItem = [
         {
             name:'Home', path: '/',
         },
         {
             name:'Contact', path: 'contact',
         },
         {
             name:'Skills', path: 'skills',
         },
     ]  
  }

}
