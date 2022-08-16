import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private st:StudentService) { }
  public student=new Student(0,"",0,"");

  ngOnInit() {
  }

  edit(rollno){
    this.student=this.st.findStudent(rollno);
    
    }
    update(){
      console.log(this.student)
      this.st.update(this.student)
    }
  }

