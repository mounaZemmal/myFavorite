import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogComponent } from './log/log.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreprodComponent } from './preprod/preprod.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { DatasetComponent } from './dataset/dataset.component';
import { JahiaComponent } from './jahia/jahia.component';
import { SitesComponent } from './sites/sites.component';
import { ProdComponent } from './prod/prod.component';
import { DevComponent } from './dev/dev.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule
  // and so on...
} from "@angular/material";


const routes: Routes =[
  { path: 'dashboard',      component: DashboardComponent },

  { path: 'log',     component: LogComponent },  

  { path: 'preprod', component: PreprodComponent },
  { path: 'prod', component: ProdComponent },
  { path: 'dev', component: DevComponent },
  { path: 'jahia', component: JahiaComponent },
  
  { path: 'dataset', component: DatasetComponent },
  
  { path: 'specifications',redirectTo: 'specifications', pathMatch: 'full' } 
  
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    PreprodComponent,
    DashboardComponent,
    LogComponent,
    SpecificationsComponent,
    DatasetComponent,
    JahiaComponent,
    SitesComponent,
    ProdComponent,
    DevComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatCardModule,  
    MatIconModule,   
    MatGridListModule,
    RouterModule.forRoot(routes) 
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
