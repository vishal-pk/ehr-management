import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  @Input() user: Number;
  constructor() { }

  ngOnInit(): void {
  }

}
