import { Component, OnInit, Input  } from '@angular/core';
import { ICurso } from '../../modules/home/interface/icurso';

@Component({
  selector: 'app-cursos22',
  templateUrl: './cursos22.component.html',
  styleUrls: ['./cursos22.component.scss']
})

export class Cursos22Component implements OnInit {

  @Input() curso22: ICurso;
  @Input() coverWitdh: number;
 
  constructor() { }
 
  ngOnInit(): void {
    this.curso22 = {
      id: 1,
      name: 'Angular 10',
      feature = true,
      image: 'http://examen-nh.jcramireztello.com/media/books/angular10.png',
      language: 'es',
      price: 5000.0,
      duration: 40,
      lessons: 7,
      deadline: '2021-01-09',
      students: 20,
      summary: 'Angular es el framework para JavaScript estándapulares para dilarJS. Ahora utilizaremos TypeScel framework.',
      instructor: 1,
      category: 2
  };
  }
}
