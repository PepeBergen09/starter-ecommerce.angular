import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  toTop=()=>window.scrollTo(0,0);
  
 

}
