import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }    from '@angular/common/http';
import { menu } from './menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu:menu;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  api="http://localhost:8888/";
  constructor(public http:HttpClient) { }

  getmenu1():Observable<menu>{
    return this.http.get<menu>(this.api+'menuController/getmenu1');
  }
}
