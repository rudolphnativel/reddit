import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../article.model';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  @Input()
  article: Article;
  edit: boolean = false;
  @Output()
  removeEvent = new EventEmitter();

  @Output()
  editArticleFunction = new EventEmitter();

  constructor(httpservice: HttpserviceService) {
    this.article = new Article("Angular 2", "http://angular.io", 10);
  }

  /**
   * Enlever un vote
   * return false pour évité un rechagementde la page
   */
  voteDown(): boolean {
    this.article.voteDown();
    console.log("vote " + this.article.votes);
    this.editArticleFunction.emit(this.article);
    return false;
  }

  /**
   * aJoute un vote dans l'article
   * return false pour évité un rechagementde la page
   */
  voteUp(): boolean {
    this.article.voteUp();
    console.log("vote " + this.article.votes);
    this.editArticleFunction.emit(this.article);
    return false;
  }
  ngOnInit(): void {
  }

  removeArticle(article: HTMLFieldSetElement,edit: HTMLFieldSetElement,id:number) {
    article.remove();
    edit.remove();
    this.removeEvent.emit(id);
  }

  editButton(article: HTMLFieldSetElement, edit: HTMLFieldSetElement) {
    console.log(article.hidden);
    if (!article.hidden) {
      article.hidden = true;
      edit.hidden = false;
    } else {
      article.hidden = false;
      edit.hidden = true;
    }
  }
  editArticle(title: HTMLInputElement, link: HTMLInputElement, article: HTMLFieldSetElement, edit: HTMLFieldSetElement) {
    if (title.value.trim() !== "" && link.value.trim() !== "") {
      this.article.title = title.value;
    this.article.link = link.value;
    this.editButton(article, edit);
    this.editArticleFunction.emit(this.article);
    } else {
      this.editButton(article, edit);
    }

  }
}
