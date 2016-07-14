import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {SearchResult} from '../../models/searchResults';

/*
  Generated class for the YoutubeService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class YoutubeService {
  searchResults: any = null;
  private key: string = "AIzaSyAmyNSSaLFYOrInBDyizrVZ8wNlqyW3Vlk";
  private url: string = "https://www.googleapis.com/youtube/v3/search";

  constructor(private http: Http) {
  }

  load(){
    if (this.searchResults) {
      // already loaded users
      return Promise.resolve(this.searchResults);
    }
  }

  search(query) {
    return new Promise<Array<SearchResult>>(resolve => {
      this.http.get(`${this.url}?q=${query}&part=snippet&key=${this.key}`)
      .map(res => <Array<SearchResult>>(res.json().items))
      .subscribe(results => {
      this.searchResults = results;
      console.log(this.searchResults);
      resolve(this.searchResults);
      });
    });
  }


}
