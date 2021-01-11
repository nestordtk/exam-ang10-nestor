import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-cursos22',
  templateUrl: './cursos22.component.html',
  styleUrls: ['./cursos22.component.scss']
})

export class Cursos22Component implements OnInit {

  @Input() curso22: any[];
  @Input() coverWitdh: number;
 
  constructor() { }
 
  ngOnInit(): void {  }
}
