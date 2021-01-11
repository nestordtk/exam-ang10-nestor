import { TestBed } from '@angular/core/testing';

import { CursosdestacadoService } from './cursosdestacado.service';

describe('CursosdestacadoService', () => {
  let service: CursosdestacadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosdestacadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
