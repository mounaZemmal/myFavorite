import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preprod',
  templateUrl: './preprod.component.html',
  styleUrls: ['./preprod.component.css']
})
export class PreprodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  updateRow(){
    console.log("mounaTest");
  }
}
