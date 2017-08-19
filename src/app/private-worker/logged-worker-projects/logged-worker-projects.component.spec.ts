import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedWorkerProjectsComponent } from './logged-worker-projects.component';

describe('LoggedWorkerProjectsComponent', () => {
  let component: LoggedWorkerProjectsComponent;
  let fixture: ComponentFixture<LoggedWorkerProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedWorkerProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedWorkerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
