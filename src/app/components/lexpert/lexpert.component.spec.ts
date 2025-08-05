import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LexpertComponent } from './lexpert.component';

describe('LexpertComponent', () => {
  let component: LexpertComponent;
  let fixture: ComponentFixture<LexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LexpertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
