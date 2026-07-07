import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aula5 } from './aula-5';

describe('Aula5', () => {
  let component: Aula5;
  let fixture: ComponentFixture<Aula5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aula5],
    }).compileComponents();

    fixture = TestBed.createComponent(Aula5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
