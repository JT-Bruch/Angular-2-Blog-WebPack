import { Injectable } from '@angular/core';
import { RandomService } from '../utility/random.service';

export interface InstagramItem {
  source: string;
  text: string;
  link: string;
}


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
        source: 'http://placehold.it/50x50',
        text: 'This is an image',
        link: 'http://google.com'
      };
  }


}
