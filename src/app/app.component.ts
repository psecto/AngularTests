import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit

{
  MyTitle: string;
  myColor: string;
 
 //define then run text and background color
  ngOnInit() {
  let quotes = [
        'TIC',
        'TECHNIC',
        'TOE'
  ];
    let color = [
      '#FFFF00',
      '#32CD32',
      '#FF0000'
    ]

  let index = 0;
  this.MyTitle = quotes[index];
  this.myColor = color[index];
  setInterval(() => 
  { 
    index=(index+1)%3; 
    this.MyTitle = quotes[index]; 
    this.myColor = color[index];
  }, 2000);

  throw new Error(" KO DUUDE not implemented.");
  }

 
}

