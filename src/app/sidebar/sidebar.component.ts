import { Component, OnInit } from '@angular/core';
declare const $:any;
declare interface SubLink {
  link: string;
  title: string;
};
declare interface RouteInfo {
    path: string;
    title: string;
    class: string;
    lien:string;   
    submenu:SubLink[]; 
  }
 
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', class: 'glyphicon glyphicon-home' ,lien: '#dashboard',submenu:[]},
    { path: 'log', title: 'Log', class: 'glyphicon glyphicon-briefcase',lien:'#log', submenu: [{
      link: 'dev',
      title: 'dev'
  }, {
      link: 'preprod',
      title: 'preprod'
  },{
    link:'prod',
    title:'prod'
  }
], },  
{ path: 'specifications', title: 'Spécifications', class: 'glyphicon glyphicon-briefcase',lien:'#log', submenu: [{
  link: 'dev',
  title: 'dev'
}, {
  link: 'preprod',
  title: 'preprod'
},{
link:'prod',
title:'prod'
}
], },  
{ path: 'dataset', title: 'DataSet', class: 'glyphicon glyphicon-home' ,lien: '#dataset',submenu:[]},



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
