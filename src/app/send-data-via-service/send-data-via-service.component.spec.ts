import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDataViaServiceComponent } from './send-data-via-service.component';

describe('SendDataViaServiceComponent', () => {
  let component: SendDataViaServiceComponent;
  let fixture: ComponentFixture<SendDataViaServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendDataViaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDataViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
