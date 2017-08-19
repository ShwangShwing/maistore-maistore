import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerProjectsComponent } from './worker-projects.component';

describe('WorkerProjectsComponent', () => {
  let component: WorkerProjectsComponent;
  let fixture: ComponentFixture<WorkerProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
