import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHttpComponent } from './article-http.component';

describe('ArticleHttpComponent', () => {
  let component: ArticleHttpComponent;
  let fixture: ComponentFixture<ArticleHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
