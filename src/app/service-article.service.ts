import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceArticleService {

  constructor() { }


  public articleslist() : Article[] {
    return [
      new Article('google', 'http://wwww.google.fr', 10),
      new Article('yahoo', 'http://wwww.yahoo.fr', 8),
      new Article('duckduck', 'http://wwww.duckduck.com', 6),
    ];
  }
  public addArticle(title: HTMLInputElement, link: HTMLInputElement, articles: Article[]) {
    if(title.value.trim() !== '' && link.value.trim() !==''){
      articles.push(new Article(title.value, link.value, 0));
      link.value = "";
      title.value = "";
    }

    return false;
  }

}
