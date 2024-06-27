import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBinComponent } from './code-bin.component';

describe('CodeBinComponent', () => {
  let component: CodeBinComponent;
  let fixture: ComponentFixture<CodeBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
