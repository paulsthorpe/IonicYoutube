import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {YoutubeService} from '../../providers/youtube-search/youtube-search';
import 'rxjs/Rx';
import { SearchResult } from '../../models/searchResults';
import { VideoPage } from '../video/video';


@Component({
  templateUrl: 'build/pages/search/search.html',
  providers: [YoutubeService]
})


export class SearchPage {
  results: SearchResult[];

  /**
   * Inject dependencies
   * @param nav
   * @param youtube
     */
  constructor(private nav: NavController,private youtube: YoutubeService) {
  }

  /**
   * If input value is changed, this method is fired.
   * it will store current value in query, and if query.length > 2
   * the method will call the api and get results and store in results
   * property
   * @param search
     */
  search(search) {
    let query = search.target.value;
    //Limit query to three chracters or more
    if (query.trim() == '' || query.trim().length > 2) {
      // get videos
      this.youtube.search(query)
        .then(res => this.results = res);
    }
  }

  /**
   * if item img or title is clicked, the video object
   * is passed in and sent to the video page through
   * ionic router
   * @param video
     */
  selectVideo(video){
    this.nav.push(VideoPage, {
      video: video
    });
  }



}
