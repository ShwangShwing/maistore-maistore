import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkerProjectComponent } from './edit-worker-project.component';

describe('EditWorkerProjectComponent', () => {
  let component: EditWorkerProjectComponent;
  let fixture: ComponentFixture<EditWorkerProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWorkerProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
