import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public name="Zensar Technologies";
  public person={
    first_name:"ved",
    last_name:"prakash",
    age:22
  }
  public today=new Date();

  ngOnInit() {
  }

}
