import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CbindingComponent } from './cbinding.component';

describe('CbindingComponent', () => {
  let component: CbindingComponent;
  let fixture: ComponentFixture<CbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
