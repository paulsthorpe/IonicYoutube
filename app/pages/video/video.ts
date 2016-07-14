import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { SearchResult } from '../../models/searchResults';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

/*
  Generated class for the VideoPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/video/video.html',
})
export class VideoPage {
  video: SearchResult;
  videoURL: SafeResourceUrl;

  constructor(private nav: NavController, navParams: NavParams, sanitizer: DomSanitizationService) {
    this.video = navParams.get('video');
    this.videoURL = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.video.id.videoId + "?rel=0");
  }

}
