import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos22Component } from './cursos22.component';

describe('Cursos22Component', () => {
  let component: Cursos22Component;
  let fixture: ComponentFixture<Cursos22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cursos22Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursos22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
