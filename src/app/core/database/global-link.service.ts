import { Injectable } from '@angular/core';

// import * as firebase from 'firebase';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


import { SocialMediaLinks } from '../interfaces/social-media-links';
import { ConstService } from '../utility/const.service';

@Injectable()
export class GlobalLinkService {

  copywriteYear: string = this.generateCopywriteYear();

  public socialMedia$: FirebaseObjectObservable<SocialMediaLinks>;


  constructor(private af: AngularFire,
              private constService: ConstService) {

    this.socialMedia$ = af.database.object(this.constService.socialMediaRoute + 'default/');
  }


  generateCopywriteYear(): string {
    const dateNow = new Date();
    return dateNow.getFullYear().toString();
  }


  addSocialMedia(val: SocialMediaLinks): void {
    val.createDate = firebase.database.ServerValue.TIMESTAMP;
    firebase.database().ref(this.constService.socialMediaRoute).child('default').set(val);
  }

  getSocialMedia(): firebase.Promise<SocialMediaLinks> {
    return firebase.database().ref(this.constService.socialMediaRoute).child('default').once('value');

  }





}
