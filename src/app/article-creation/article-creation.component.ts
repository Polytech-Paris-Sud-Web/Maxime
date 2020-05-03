import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
import { ArticleNoid, Article } from '../models/article';

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})

export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  @Output()
  newArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private fb: FormBuilder, private articleService : ArticleService) {
    this.articleForm = this.fb.group({
      title: ['Faux titre', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  createArticle(){
    const formModel = this.articleForm.value;
    const article_ : ArticleNoid = {
      title : formModel.title,
      content : formModel.content,
      authors : formModel.authors
    }
    this.articleService.add(article_).subscribe((article) => this.newArticle.emit(article));
  }

  ngOnInit() {
  }

}