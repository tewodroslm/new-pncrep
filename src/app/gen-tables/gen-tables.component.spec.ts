import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenTablesComponent } from './gen-tables.component';

describe('GenTablesComponent', () => {
  let component: GenTablesComponent;
  let fixture: ComponentFixture<GenTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
