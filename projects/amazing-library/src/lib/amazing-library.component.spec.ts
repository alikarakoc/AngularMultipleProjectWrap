import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazingLibraryComponent } from './amazing-library.component';

describe('AmazingLibraryComponent', () => {
  let component: AmazingLibraryComponent;
  let fixture: ComponentFixture<AmazingLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazingLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
