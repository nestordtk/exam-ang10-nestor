import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursocategcontainer',
  templateUrl: './cursocategcontainer.component.html',
  styleUrls: ['./cursocategcontainer.component.scss']
})
export class CursocategcontainerComponent implements OnInit {

  listCurso: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
