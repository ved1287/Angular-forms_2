import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  constructor() { }
  public names=['Ved','Hema','Aayansh','Johnson','Dhoni']
  public technologies=['Angular','React','Hibernate','Spring Boot']
  public employees=[
    {
       "id":134,
       "name":"ved",
       "salary":1000.00,
       "skills":["java","HTML","REACT"]
    },
    {
      "id":138,
      "name":"veda",
      "salary":1009.00,
      "skills":["java","HTML","REACT","Spring Boot"]
   },
   {
    "id":148,
    "name":"vedansh",
    "salary":1000098.00,
    "skills":["Hibernate","java","HTML","REACT"]
 }

  ];
  public titleStyles={
    backgroundColor:"blue",
    color:"white",
    fontStyle:"italic"
  }
  public titleStyles1={
    backgroundColor:"purple",
    color:"white",
    fontStyle:"italic"
  }
  ngOnInit() {
  }

}
