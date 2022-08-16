import { Component, OnInit } from '@angular/core';
import {Student} from '../student'
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }
  public student=new Student(0,"",0,0,0);

  ngOnInit() {
  }
  printInput(){
    console.log(this.student)
    console.log(this.student.computeTotal())
  }
}
