import { Component, Input, OnInit } from '@angular/core';
import { IInstructor } from '../../../interface/iinstructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  @Input() instructorinput: IInstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
