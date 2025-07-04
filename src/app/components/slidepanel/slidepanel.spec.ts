import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slidepanel } from './slidepanel';

describe('Slidepanel', () => {
  let component: Slidepanel;
  let fixture: ComponentFixture<Slidepanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Slidepanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Slidepanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
