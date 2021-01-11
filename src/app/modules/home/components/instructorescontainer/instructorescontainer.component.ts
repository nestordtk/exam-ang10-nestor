import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { IInstructor } from '../../interface/iinstructor';

@Component({
  selector: 'app-instructorescontainer',
  templateUrl: './instructorescontainer.component.html',
  styleUrls: ['./instructorescontainer.component.scss']
})
export class InstructorcontainerComponent implements OnInit {

  varinstructor: IInstructor[] = [];

  constructor(private instructorServ: InstructorService) { }

  ngOnInit(): void {
    this.getinstructor();
  }

  getinstructor() {
    this.instructorServ.getinstructor()
      .subscribe((res: IInstructor[]) => {
        this.varinstructor = res;
      });
  }


}
