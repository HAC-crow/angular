import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { menu } from '../menu';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  test:boolean = false;
  menu:menu;
  constructor(
    private menuService:MenuService
  ) { }

  ngOnInit() {
    this.getmenu1();
  }
  getmenu1():void{
    this.menuService.getmenu1().subscribe(
      menu=>{
        this.menu=menu;
        console.log(this.menu);
      }

      );
  }

}
