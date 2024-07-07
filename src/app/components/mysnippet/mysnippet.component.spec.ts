import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysnippetComponent } from './mysnippet.component';

describe('MysnippetComponent', () => {
  let component: MysnippetComponent;
  let fixture: ComponentFixture<MysnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysnippetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MysnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
