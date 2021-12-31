import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartToolBarComponent } from './start-tool-bar.component';

describe('StartToolBarComponent', () => {
  let component: StartToolBarComponent;
  let fixture: ComponentFixture<StartToolBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartToolBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
