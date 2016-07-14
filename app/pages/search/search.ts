import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {YoutubeService} from '../../providers/youtube-search/youtube-search';
import 'rxjs/Rx';
import { SearchResult } from '../../models/searchResults';
import { VideoPage } from '../video/video';


/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [YoutubeService]
})
export class SearchPage {
  results: SearchResult[];

  constructor(private nav: NavController,private youtube: YoutubeService) {
  }

  search(search) {
    let query = search.target.value;
    //Limit query to three chracters or more
    if (query.trim() == '' || query.trim().length > 2) {
      // Get the searched users from github
      this.youtube.search(query)
        .then(res => this.results = res);
    }
  }

  selectVideo(video){
    this.nav.push(VideoPage, {
      video: video
    });
  }



}
