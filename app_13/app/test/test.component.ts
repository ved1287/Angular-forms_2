import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  public studentForm=new FormGroup({
    rollnoControl:new FormControl(),
    nameControl:new FormControl,
    mark1Control:new FormControl(0.0),
    mark2Control:new FormControl(0.0),
    mark3Control:new FormControl(0.0),
  

  });

  ngOnInit() {
  }
  printInput(){
    console.log(this.studentForm.value)
  }

}
