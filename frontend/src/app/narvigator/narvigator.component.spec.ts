import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarvigatorComponent } from './narvigator.component';

describe('NarvigatorComponent', () => {
  let component: NarvigatorComponent;
  let fixture: ComponentFixture<NarvigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarvigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarvigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
