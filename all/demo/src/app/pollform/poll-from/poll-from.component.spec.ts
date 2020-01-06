import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollFromComponent } from './poll-from.component';

describe('PollFromComponent', () => {
  let component: PollFromComponent;
  let fixture: ComponentFixture<PollFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
