import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOutputFieldComponent } from './data-output-field.component';

describe('DataOutputFieldComponent', () => {
  let component: DataOutputFieldComponent;
  let fixture: ComponentFixture<DataOutputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataOutputFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataOutputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
