import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tabs2Page } from './tabs2.page';

describe('Tabs2Page', () => {
  let component: Tabs2Page;
  let fixture: ComponentFixture<Tabs2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tabs2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
