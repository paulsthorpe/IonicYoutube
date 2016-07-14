import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {SearchPage} from '../search/search';
import {VideoPage} from '../video/video';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private searchTab: any;
  private videoTab: any;

  constructor() {

    this.searchTab = SearchPage;
    this.videoTab = VideoPage;
  }
}
