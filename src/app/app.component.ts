import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit

{
  MyTitle: string;
  
  ngOnInit(): void {
  let quotes = [
        'yo',
        'punk',
        'whatsup'
  ];
  let index = 0;
  this.MyTitle = quotes[index];
  setInterval(() => { index=(index+1)%3; this.MyTitle = quotes[index]; }, 3000);





  throw new Error("Method not implemented.");
  }

 
}

