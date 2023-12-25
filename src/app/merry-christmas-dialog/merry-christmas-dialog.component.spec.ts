import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerryChristmasDialogComponent } from './merry-christmas-dialog.component';

describe('MerryChristmasDialogComponent', () => {
  let component: MerryChristmasDialogComponent;
  let fixture: ComponentFixture<MerryChristmasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerryChristmasDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerryChristmasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
