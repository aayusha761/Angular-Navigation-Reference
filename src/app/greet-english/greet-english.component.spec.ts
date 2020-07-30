import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetEnglishComponent } from './greet-english.component';

describe('GreetEnglishComponent', () => {
  let component: GreetEnglishComponent;
  let fixture: ComponentFixture<GreetEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
