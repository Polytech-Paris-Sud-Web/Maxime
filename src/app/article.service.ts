import { Injectable } from '@angular/core';
import { Article, ArticleNoid } from './models/article';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient) {
  }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }

  public delete(id:number): Observable<Article> {
    return this.http.delete<Article>(`http://localhost:3000/articles/${id}`);
  }

  public add(newArticle : ArticleNoid): Observable<Article> {
    return this.http.post<Article>("http://localhost:3000/articles/", newArticle);
  }
}