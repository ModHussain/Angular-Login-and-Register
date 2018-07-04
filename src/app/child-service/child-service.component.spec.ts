import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildServiceComponent } from './child-service.component';

describe('ChildServiceComponent', () => {
  let component: ChildServiceComponent;
  let fixture: ComponentFixture<ChildServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
