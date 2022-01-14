import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticleHttpComponent } from './article-http/article-http.component'

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
