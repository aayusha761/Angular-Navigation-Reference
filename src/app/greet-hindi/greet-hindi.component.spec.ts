import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetHindiComponent } from './greet-hindi.component';

describe('GreetHindiComponent', () => {
  let component: GreetHindiComponent;
  let fixture: ComponentFixture<GreetHindiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetHindiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetHindiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
