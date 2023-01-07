import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helppage',
  templateUrl: './helppage.component.html',
  styleUrls: ['./helppage.component.css']
})
export class HelppageComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
