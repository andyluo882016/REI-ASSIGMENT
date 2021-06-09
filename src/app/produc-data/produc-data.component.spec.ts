import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducDataComponent } from './produc-data.component';

describe('ProducDataComponent', () => {
  let component: ProducDataComponent;
  let fixture: ComponentFixture<ProducDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
