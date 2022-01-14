import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article.model';
import { HttpserviceService } from './httpservice.service';
import { ServiceArticleService } from './service-article.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reddit';
  articles: Article[];

  constructor(private httpService: HttpserviceService) {
    this.articles = [ ];
    this.sorteArticle();
  }
  ngOnInit(){
    this.getArticles();
   }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Adding article title: {title.value} and link: ${link.value}`);
   // this.service.addArticle( title, link,this.articles);
   let art = new Article(title.value, link.value, 0)
   this.articles.push(art);
      link.value = "";
      title.value = "";
    this.httpService.addArticle(art).subscribe({
      next: data => {
        art.id = data.id;
    },
      error: error => {
          console.error('There was an error!', error);
      }});
    return false;
  }
  sorteArticle():Article[]{
    console.log(this.articles);
    return this.articles.sort((a:Article,b:Article) =>b.votes - a.votes);
  }

  removeArticle(id:number){
    let removeMe = this.articles.findIndex( a => a.id == id);
    this.articles.splice(removeMe, 1);
    this.httpService.deleteArticel(id).subscribe(() => status = 'Delete successful');
  }

  getArticles(){

    return this.httpService.getArticles().subscribe({
      next:data => {
        data.forEach(element => {
          let art:Article =  new Article(element.title,element.link,element.votes);
          art.id = element.id;
          this.articles.push(art);
        })
      },
      error: error =>{
        alert(`Une erreur c'est produite <br> ${error}`)
      }
    }

      );
    // return this.httpService.getArticles().subscribe(httpArticle => this.articles = httpArticle);
  }

  editArticleFunction(article:Article){
    this.httpService.UpdateArticle(article).subscribe();
  }
}
