import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrls: ['./filterpage.component.css']
})
export class FilterpageComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
