import {Component, Input, OnInit, Output} from '@angular/core';
import {Article} from '../models/article';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  deleteArticle : EventEmitter<Article> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  delete(){
    this.deleteArticle.emit(this.article);
  }

}