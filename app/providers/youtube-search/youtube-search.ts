import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {SearchResult} from '../../models/searchResults';


@Injectable()

export class YoutubeService {

  searchResults:any = null;
  private key:string = "AIzaSyAmyNSSaLFYOrInBDyizrVZ8wNlqyW3Vlk";
  private url:string = "https://www.googleapis.com/youtube/v3/search";

  constructor(private http:Http) {
  }

  /**
   * If results are already present
   * @returns {Promise<T>}
     */
  load() {
    if (this.searchResults) {
      return Promise.resolve(this.searchResults);
    }
  }

  /**
   * If input value is changed and is > 2, this method is fired
   * from the search component
   * @param query
   * @returns {Promise<Array<SearchResult>>}
     */
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
