import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerryChristmasDialogComponent } from './merry-christmas-dialog.component';

describe('MerryChristmasDialogComponent', () => {
  let component: MerryChristmasDialogComponent;
  let fixture: ComponentFixture<MerryChristmasDialogComponent>;
  let windowSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerryChristmasDialogComponent ]
      // Add any necessary modules here
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerryChristmasDialogComponent);
    component = fixture.componentInstance;
    windowSpy = spyOn(window, 'open');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct message', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Frohe Weihnachten!');
  });

  // Example test for a button - adjust as needed
  it('should open GitHub page when GitHub button is clicked', () => {
    const githubButton = fixture.debugElement.nativeElement.querySelector('.github-button');
    githubButton.click();
    expect(windowSpy).toHaveBeenCalledWith('https://github.com/PlaidPeacoat/Test-Landing-Page', '_blank');
  });

  // Add more tests as needed
});
