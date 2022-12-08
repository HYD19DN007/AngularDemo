import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumefileComponent } from './consumefile.component';

describe('ConsumefileComponent', () => {
  let component: ConsumefileComponent;
  let fixture: ComponentFixture<ConsumefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumefileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
