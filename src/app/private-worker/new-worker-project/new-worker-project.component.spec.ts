import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWorkerProjectComponent } from './new-worker-project.component';

describe('NewWorkerProjectComponent', () => {
  let component: NewWorkerProjectComponent;
  let fixture: ComponentFixture<NewWorkerProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWorkerProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewWorkerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
