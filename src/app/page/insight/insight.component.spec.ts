import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightPage } from './insight.component';

describe('InsightComponent', () => {
  let component: InsightPage;
  let fixture: ComponentFixture<InsightPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsightPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
