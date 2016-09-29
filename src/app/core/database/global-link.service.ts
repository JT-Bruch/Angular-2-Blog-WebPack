import { Injectable } from '@angular/core';

import { AngularFire } from 'angularfire2';


import { SocialMediaLinks } from '../interfaces/social-media-links';
import { ConstService } from '../utility/const.service';

@Injectable()
export class GlobalLinkService {

  copywriteYear: string = this.generateCopywriteYear();


  constructor(private af: AngularFire,
              private constSvc: ConstService) {
  }

  generateCopywriteYear(): string {
    const dateNow = new Date();
    return dateNow.getFullYear().toString();
  }


  addSocialMedia(val: SocialMediaLinks): void {
    val.createDate = firebase.database.ServerValue.TIMESTAMP;
    firebase.database().ref(this.constSvc.socialMediaRoute).push(val);
  }

  getSocialMedia(): firebase.Promise<SocialMediaLinks> {
    return firebase.database().ref(this.constSvc.socialMediaRoute).once('value');
  }





}
