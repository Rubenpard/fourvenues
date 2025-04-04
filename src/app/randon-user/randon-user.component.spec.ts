import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandonUserComponent } from './randon-user.component';

describe('RandonUserComponent', () => {
  let component: RandonUserComponent;
  let fixture: ComponentFixture<RandonUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandonUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
