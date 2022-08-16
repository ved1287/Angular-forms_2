import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private st:StudentService) { }
  public student=new Student(0,"",0,"");
 

  ngOnInit() {
  }
 add(){
   let std1=new Student(0,"",0,"");
   std1.rollno=this.student.rollno;
   std1.name=this.student.name;
   std1.age=this.student.age;
   std1.city=this.student.city;
   
   console.log(this.st.addStudent(std1));
 }

 
}
