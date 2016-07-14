import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { SearchResult } from '../../models/searchResults';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';


@Component({
  templateUrl: 'build/pages/video/video.html',
})

export class VideoPage {
  
  video: SearchResult;
  videoURL: SafeResourceUrl;

  /**
   * Inject dependencies
   * get video object from router, store in this.video
   * sanitize url from video object
   * @param nav
   * @param navParams
   * @param sanitizer
     */
  constructor(private nav: NavController, navParams: NavParams, sanitizer: DomSanitizationService) {
    this.video = navParams.get('video');
    console.log(this.video);
    //base url for embedding youtube videos + the video id, derived from object
    this.videoURL = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.video.id.videoId + "?rel=0");
  }

}
