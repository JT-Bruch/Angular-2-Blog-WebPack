import { Injectable } from '@angular/core';
import { RandomService } from '../utility/random.service';
import { InstagramItem } from './../interfaces/instagram-item';

@Injectable()
export class InstagramListService {

  numInstagramItems: number = this.randomService.getRandomInt(2, 5);

  constructor(private randomService: RandomService) { }

  buildFakeInstagramList(): InstagramItem[] {
    let instaList: InstagramItem[] = [];
    for (let listNdx = 0; listNdx < this.numInstagramItems; listNdx++) {
      let fakeItem: InstagramItem = this.buildInstagramItem();
      instaList.push(fakeItem);
    }
    return instaList;
  }

  buildInstagramItem(): InstagramItem {
    return {
        link: 'http://google.com',
        source: 'http://placehold.it/50x50',
        text: 'This is an image'
      };
  }
}
