import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickItemComponent } from './click-item.component';

describe('ClickItemComponent', () => {
  let component: ClickItemComponent;
  let fixture: ComponentFixture<ClickItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
