import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputFieldComponent } from './data-input-field.component';

describe('DataInputFieldComponent', () => {
  let component: DataInputFieldComponent;
  let fixture: ComponentFixture<DataInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataInputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
