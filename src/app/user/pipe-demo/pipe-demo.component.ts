import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  constructor() { }
  price=12000
  currentDate = new Date()
  user = "rAm"
  num = 123456.12345
  ngOnInit(): void {
  }

}
