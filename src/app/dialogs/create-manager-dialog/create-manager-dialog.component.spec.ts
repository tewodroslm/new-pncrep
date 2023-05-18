import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagerDialogComponent } from './create-manager-dialog.component';

describe('CreateManagerDialogComponent', () => {
  let component: CreateManagerDialogComponent;
  let fixture: ComponentFixture<CreateManagerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateManagerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
