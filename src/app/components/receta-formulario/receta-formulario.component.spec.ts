import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaFormularioComponent } from './receta-formulario.component';

describe('RecetaFormularioComponent', () => {
  let component: RecetaFormularioComponent;
  let fixture: ComponentFixture<RecetaFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetaFormularioComponent]
    });
    fixture = TestBed.createComponent(RecetaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
