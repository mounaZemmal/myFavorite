import { Component, OnInit } from '@angular/core';
declare const $:any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    lien:string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: '', class: 'glyphicon glyphicon-home' ,lien: '#dashboard'},
    { path: 'log', title: 'Log',  icon:'', class: 'glyphicon glyphicon-briefcase',lien:'#log' },

    
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);    
  }

}
