import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaTablaComponent } from './receta-tabla.component';

describe('RecetaTablaComponent', () => {
  let component: RecetaTablaComponent;
  let fixture: ComponentFixture<RecetaTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecetaTablaComponent]
    });
    fixture = TestBed.createComponent(RecetaTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
