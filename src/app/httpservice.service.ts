import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService  {

  constructor(private client: HttpClient) { }

  getArticles():Observable<Array<Article>>{
    return this.client.get<Array<Article>>(`http://localhost:3000/articles`)
  }
  deleteArticel(id:number) :Observable<Article>{
    console.log(`http://localhost:3000/articles/${id}`);
    return this.client.delete<Article>(`http://localhost:3000/articles/${id}`)
  }

  addArticle(article:Article):Observable<Article>{
   return this.client.post<Article>(`http://localhost:3000/articles`,{title:article.title,link:article.link,votes:article.votes});
  }
  UpdateArticle(article:Article):Observable<Article>{
    return this.client.put<Article>(`http://localhost:3000/articles/${article.id}`,{title:article.title,link:article.link,votes:article.votes});
   }
}
